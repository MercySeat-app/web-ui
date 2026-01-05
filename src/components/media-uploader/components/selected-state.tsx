type SelectedStateProps = {
  files: File[];
  onRemove: (index: number) => void;
};

export function SelectedState({ files, onRemove }: SelectedStateProps) {
  if (!files.length) return null;
  return (
    <div className="space-y-2">
      <ul className="space-y-1">
        {files.map((file, idx) => (
          <li key={idx} className="flex items-center justify-between p-2 border rounded">
            <span className="truncate max-w-xs">{file.name}</span>
            <button
              type="button"
              className="ml-2 text-red-500 hover:underline"
              onClick={() => onRemove(idx)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
