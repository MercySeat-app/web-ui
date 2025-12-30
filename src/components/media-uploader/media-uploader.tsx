import Dropzone from "react-dropzone";
import { useState, useEffect } from "react";
import clsx from "clsx";
import uploadIcon from "./assets/video-upload-cirle.svg";
import cancelImage from "./assets/cancel.svg";
import { extractMetadata, validateFile } from "./media-uploader-utils";

export type MediaInfo = {
    file: File | null;
    meta: {
        duration: number;
        extension: string;
        previewUrl: string;
    } | null
};

export type MediaUploaderProps = {
    value: File | null;
    onChange: (value: MediaInfo) => void;
    placeholder?: string;
    accepts: string[];
}

const DEFAULT_ACCEPTS = [
    "audio/mpeg", "audio/mp3", "audio/wav", "audio/x-wav", "audio/ogg", "audio/aac", "audio/flac", "audio/mp4",
    "video/mp4", "video/webm", "video/quicktime", "video/x-quicktime", "video/ogg", "video/x-matroska"
];

export default function MediaUploader({
    value: _value,
    accepts = DEFAULT_ACCEPTS,
    placeholder = "Accepts • MP3, WAV, AAC, FLAC, MP4, MOV, WebM",
    onChange,
}: MediaUploaderProps) {
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        return () => {
            if (previewUrl) URL.revokeObjectURL(previewUrl);
        };
    }, [previewUrl]);

    const handleChoose = async (f: File) => {
        setError(null);
        const vErr = validateFile(f, accepts);
        if (vErr) {
            setError(vErr);
            return;
        }
        setFile(f);
        const url = URL.createObjectURL(f);
        setPreviewUrl(url);
        const mediaData = await extractMetadata(f);
        onChange?.(mediaData);
    };

    useEffect(() => {
        setFile(_value);
        if (_value) {
            const url = URL.createObjectURL(_value);
            setPreviewUrl(url);
        } else {
            setPreviewUrl(null);
        }
    }, [_value]);

    const removeFile = () => {
        setFile(null);
        setPreviewUrl(null);
        setError(null);
        onChange?.({
            file: null,
            meta: null,
        });
    };

    return (
        <div className="w-full min-w-lg p-4 bg-white border border-gray-50 rounded-[0.625rem]">
            <Dropzone
                accept={accepts.reduce((acc, type) => ({ ...acc, [type]: [] }), {})}
                disabled={!!file}
                onDrop={acceptedFiles => {
                    if (acceptedFiles && acceptedFiles[0]) {
                        handleChoose(acceptedFiles[0]);
                    }
                }}
            >
                {({ isDragActive, getRootProps, getInputProps, inputRef }) => (
                    <div
                        {...getRootProps()}
                        className={clsx(
                            "w-full rounded-md p-6 flex flex-col items-center justify-center cursor-pointer transition-colors relative",
                            file ? "border-green-400 bg-green-50" : isDragActive ? "border-lavender-blue-700 bg-gray-50" : "border-gray-300 hover:border-lavender-blue-700"
                        )}
                        tabIndex={0}
                        onClick={() => inputRef.current?.click()}
                    >
                        <input
                            {...getInputProps()}
                            ref={inputRef}
                            hidden
                        />
                        {/* Cancel Button */}
                        {file && (
                            <img
                                src={cancelImage}
                                alt="Remove file"
                                onClick={e => {
                                    e.stopPropagation();
                                    removeFile();
                                }}
                                className="absolute top-2 right-2 z-10 p-1 rounded-full bg-white/50 hover:bg-red-600 cursor-pointer w-6 h-6 transition-colors"
                                style={{ objectFit: 'contain' }}
                            />
                        )}
                        <div className="text-center">
                            <img src={uploadIcon} alt="" className="w-12 h-12 mb-3 block mx-auto text-gray-400" />
                            <p className="text-sm text-gray-700 font-regular">{file ? "File ready" : "Click or drag & drop media"}</p>
                            <p className="mt-1 text-xs text-gray-500">{placeholder}</p>
                            {file && <p className="mt-2 text-sm font-semibold text-green-700">{file.name}</p>}
                        </div>
                    </div>
                )}
            </Dropzone>
            {error && <div id="error-message" className="p-2 mt-3 text-sm text-red-600 border border-red-100 rounded bg-red-50">{error}</div>}

        </div>
    );
}