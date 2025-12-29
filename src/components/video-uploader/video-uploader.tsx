import { useRef, useState, useEffect } from "react";
import axios, { type AxiosProgressEvent } from "axios";
import clsx from "clsx";
import videoUploader from "../../assets/video-upload-cirle.svg";

export interface VideoUploaderProps {
    value: File | null;
    accepts?: string[];
    onUploaded?: (info: any) => void;
    placeholder?: string;
}

export default function VideoUploader({
    value: _value,
    accepts = ["video/mp4", "video/webm", "video/quicktime", "video/x-quicktime", "video/ogg", "video/x-matroska"],
    onUploaded,
    placeholder = "Accepts • MP4, MOV, WebM",
}: VideoUploaderProps) {
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const [videoName, setVideoName] = useState("");

    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState<string | null>(null);
    const [meta, setMeta] = useState<{ duration?: number; width?: number; height?: number; size?: number } | null>(null);
    const [error, setError] = useState<string | null>(null);

    const inputRef = useRef<HTMLInputElement | null>(null);
    const dropRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        return () => {
            if (previewUrl) URL.revokeObjectURL(previewUrl);
        };
    }, [previewUrl]);


    const extractMetadata = (file: File) => {
        return new Promise<{ duration?: number; width?: number; height?: number }>((resolve) => {
            const url = URL.createObjectURL(file);
            const vid = document.createElement("video");
            vid.preload = "metadata";
            vid.src = url;
            vid.onloadedmetadata = () => {
                const duration = vid.duration;
                const width = vid.videoWidth || undefined;
                const height = vid.videoHeight || undefined;
                URL.revokeObjectURL(url);
                resolve({ duration, width, height });
            };
            setTimeout(() => resolve({}), 3000);
        });
    };

    const validateFile = (file: File) => {
        // Basic Mime Check
        if (!accepts.includes(file.type)) {
            // Fallback: sometimes Windows registers .mov as generic binary or empty string, 
            // check extension if mime fails
            const ext = file.name.split('.').pop()?.toLowerCase();
            if (ext === 'mov') return null;

            return `Invalid file type: ${file.type || 'unknown'}. Allowed: ${accepts.join(", ")}`;
        }

        return null;
    };

    const handleChoose = async (f: File) => {
        setError(null);
        setMessage(null);
        setProgress(0);

        const vErr = validateFile(f);
        if (vErr) {
            setError(vErr);
            return;
        }

        setFile(f);
        // Default the video name to the filename (minus extension)
        setVideoName(f.name.replace(/\.[^/.]+$/, ""));

        const url = URL.createObjectURL(f);
        setPreviewUrl(url);
        setMeta({ size: f.size, ...(await extractMetadata(f)) });
    };

    useEffect(() => {
        startUpload();
    }, [file]);

    // Drag & Drop Handlers
    useEffect(() => {
        const el = dropRef.current;
        if (!el) return;
        const onDragOver = (e: DragEvent) => {
            e.preventDefault();
            e.dataTransfer!.dropEffect = "copy";
            el.classList.add("ring-2", "ring-offset-2", "ring-lavender-blue-700");
        };
        const onLeave = () => {
            el.classList.remove("ring-2", "ring-offset-2", "ring-lavender-blue-700");
        };
        const onDrop = (e: DragEvent) => {
            e.preventDefault();
            el.classList.remove("ring-2", "ring-offset-2", "ring-lavender-blue-700");
            const f = e.dataTransfer?.files?.[0];
            if (f) handleChoose(f);
        };
        el.addEventListener("dragover", onDragOver);
        el.addEventListener("dragleave", onLeave);
        el.addEventListener("drop", onDrop);
        return () => {
            el.removeEventListener("dragover", onDragOver);
            el.removeEventListener("dragleave", onLeave);
            el.removeEventListener("drop", onDrop);
        };
    }, [dropRef.current]);

    const startUpload = async () => {
        if (!file) return;

        setProgress(0);
        setMessage(null);
        setError(null);

        try {
            // --- STEP 1: Get the Pre-Signed URL from your backend ---
            // We send the file info so the backend can generate the key/name
            const { data: signData } = await axios.post("http://localhost:5000/api/get-upload-url", {
                fileName: file.name,
                fileType: file.type,
                customName: videoName, // The name user typed in the input
            });

            const { uploadUrl, key } = signData;

            // --- STEP 2: Upload directly to S3 ---
            // IMPORTANT: We do NOT use FormData here. We send the File object directly.
            // The 'Content-Type' header must match what you signed in the backend.
            await axios.put(uploadUrl, file, {
                headers: {
                    "Content-Type": file.type,
                },
                onUploadProgress: (progressEvent: AxiosProgressEvent) => {
                    if (!progressEvent.total) return;
                    const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    setProgress(percent);
                },
            });

            // --- STEP 3: (Optional) Notify backend that upload is done ---
            // Since the file went to S3, your backend doesn't know it finished unless you tell it.
            await axios.post("http://localhost:5000/api/save-video-metadata", {
                key: key,
                customName: videoName,
                size: file.size,
                duration: meta?.duration,
                width: meta?.width,
                height: meta?.height
            });

            setMessage("Upload successful!");
            setFile(null);
            setPreviewUrl(null);
            setMeta(null);
            setVideoName("");
            setProgress(100);
            onUploaded?.({ key, url: uploadUrl.split('?')[0] });

        } catch (err: any) {
            console.error(err);
            const msg = err?.response?.data?.error || err.message || "Upload failed";
            setError(msg);
        } finally {
            setTimeout(() => setProgress(0), 1000);
        }
    };

    return (
        <div className="w-full max-w-lg p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
            <div
                ref={dropRef}
                className={clsx(
                    "w-full border-dashed border-1 rounded-md p-6 flex flex-col items-center justify-center cursor-pointer transition-colors",
                    file ? "border-green-400 bg-green-50" : "border-gray-300 hover:border-lavender-blue-700 hover:bg-gray-50"
                )}
                onClick={() => inputRef.current?.click()}
            >
                <input
                    ref={inputRef}
                    type="file"
                    accept={accepts.join(",")}
                    hidden
                    onChange={(e) => {
                        const f = e.target.files?.[0];
                        if (f) handleChoose(f);
                    }}
                />
                <div className="text-center">
                    <img src={videoUploader} alt="" className="w-12 h-12 mb-3 block mx-auto text-gray-400" />
                    <p className="font-medium text-gray-700">{file ? "File ready" : "Click or drag & drop video"}</p>
                    <p className="mt-1 text-xs text-gray-500">{placeholder}</p>
                    {file && <p className="mt-2 text-sm font-semibold text-green-700">{file.name}</p>}
                </div>
            </div>

            {error && <div className="p-2 mt-3 text-sm text-red-600 border border-red-100 rounded bg-red-50">{error}</div>}

            {/* Preview Area. Commented out for future reference */}
            {/*
            previewUrl && (
                <div className="relative mt-4 overflow-hidden bg-black rounded-md group">
                    <video src={previewUrl} controls className="object-contain w-full max-h-48" />
                    <div className="absolute transition-opacity opacity-0 top-2 right-2 group-hover:opacity-100">
                        <button onClick={(e) => { e.stopPropagation(); removeFile(); }} className="p-1 text-xs text-white rounded-full bg-black/50 hover:bg-red-600">
                            ✕
                        </button>
                    </div>
                </div>
            )}
            */}

            {/* Actions */}
            {/* Progress Bar */}
            <div className={clsx("mt-4 transition-all duration-500", progress > 0 ? "opacity-100" : "opacity-0")}>
                <div className="flex justify-between mb-1 text-xs text-gray-500">
                    <span>Uploading...</span>
                    <span>{progress}%</span>
                </div>
                <div className="h-2 overflow-hidden bg-gray-100 rounded-full">
                    <div
                        className="h-full transition-all duration-300 ease-out bg-lavender-blue-500"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            {message && <div className="p-2 mt-3 text-sm text-center text-green-700 border border-green-100 rounded bg-green-50">{message}</div>}
        </div>
    );
}