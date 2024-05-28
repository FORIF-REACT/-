interface Props {
    className?: string;
    rows?: number;
    placeholder?: string;
  }
  
  export default function Input({ className, rows, placeholder }: Props) {
    return (
        <div className={`w-full h-full relative rounded-md shadow-sm ${className}`}>
          <textarea
            name="value"
            id="value"
            rows={rows}
            className="block w-full h-full rounded-md border-0 px-[8px] py-[2px] text-gray-900 ring-1 ring-inset ring-gray-300 text-[13px] leading-[20px] placeholder:text-gray-400 resize-none focus:ring-1 focus:ring-inset focus:ring-primary"
            placeholder={placeholder}
          />
        </div>
    );
  }
  