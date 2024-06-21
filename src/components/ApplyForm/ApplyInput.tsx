import { useState, useEffect } from "react";

interface Props {
  className?: string;
  rows?: number;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function Input({ className, rows, placeholder, onChange }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const [borderColor, setBorderColor] = useState<string>("ring-gray-300");

  useEffect(() => {
    setBorderColor(isFocused ? "ring-gray-400" : "ring-gray-200");
  }, [isFocused]);

  return (
    <div className={`w-full h-full relative rounded-md shadow-sm ${className}`}>
      <textarea
        name="value"
        id="value"
        rows={rows}
        className={`block w-full h-full rounded-md border-2 px-3 py-3 ring-1  ${borderColor} text-16 leading-20 placeholder:text-gray-400 resize-none duration-200 ease-in-out`}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{ outline: 'none' }} 
      />
    </div>
  );
}
