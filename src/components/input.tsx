interface Props {
  className?: string;
  prefix?: string;
  placeholder?: string;
}

export default function Input({ className, prefix, placeholder }: Props) {
  return (
      <div className={`relative rounded-md shadow-sm ${className}`}>
        {prefix ? (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">{prefix}</span>
          </div>
        ) : (
          <></>
        )}
        <input
          type="text"
          name="value"
          id="value"
          className="block w-full h-full rounded-md border-0 px-[11px] text-gray-900 ring-1 ring-inset ring-gray-300 text-[16px] placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary"
          placeholder={placeholder}
        />
      </div>
  );
}
