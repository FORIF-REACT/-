import { useFormContext } from "react-hook-form";
interface InputProps {
  name: string;
  required?: boolean;
  className?: string;
  prefix?: string;
  placeholder?: string;
}

export default function Input({
  name,
  required = false,
  className,
  prefix,
  placeholder,
}: InputProps) {
  const { register } = useFormContext();
  return (
    <div className={`w-full h-full relative rounded-md shadow-sm ${className}`}>
      {prefix ? (
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">{prefix}</span>
        </div>
      ) : (
        <></>
      )}
      <input
        type="text"
        {...register(name, { required })}
        placeholder={placeholder}
        className="block w-full h-full rounded-md border-0 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 text-12 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
      />
    </div>
  );
}
