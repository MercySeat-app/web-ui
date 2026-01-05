import { DropzoneArea } from "./components/dropzone-area";
import { SelectedFile } from "./components/selected-file";
import type { MediaUploaderProps } from "./types";

export function MediaUploader({
  accepts,
  onChange,
  value,
  placeholder = "",
}: MediaUploaderProps) {
  if (value) {
    return <SelectedFile file={value} onChange={onChange} />;
  }

  return (
    <DropzoneArea
      extensions={accepts}
      onDropFile={onChange}
      placeholder={placeholder}
    />
  );
}
