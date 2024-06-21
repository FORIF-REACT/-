import { useFormContext } from "react-hook-form";

interface TextareaProps {
  name: string;
  required?: boolean;
  rows?: number;
  placeholder?: string;
  className?: string;
}

export default function Textarea({
  name,
  required = false,
  className,
  rows,
  placeholder,
}: TextareaProps) {
  const { register } = useFormContext();
  return (
    <div className={`w-full h-full relative rounded-md shadow-sm ${className}`}>
      <textarea
        {...register(name, { required })}
        rows={rows}
        placeholder={placeholder}
        className="block w-full h-full rounded-md border-0 px-2 py-1 text-gray-900 ring-1 ring-inset ring-gray-300 text-12 leading-20 placeholder:text-gray-400 resize-none focus:ring-1 focus:ring-inset focus:ring-primary"
      />
    </div>
  );
}
