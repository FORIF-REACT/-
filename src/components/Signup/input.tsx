import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { focusState } from "@/Atoms";

interface Props {
  className?: string;
  prefix?: string;
  placeholder?: string;
}

export default function Input({ className, prefix, placeholder}: Props) {
  const [focus, setFocus] = useRecoilState<boolean>(focusState)

  const focusDecide = () => {
    setFocus(true)
  }
  const blurDecide = () => {
    setFocus(false)
  }
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
          name="value"
          id="value"
          className="block w-full h-full rounded-md border-0 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 text-12 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
          placeholder={placeholder}
          onFocus={() => focusDecide()}
          onBlur={() => blurDecide()}
        />
      </div>
  );
}
