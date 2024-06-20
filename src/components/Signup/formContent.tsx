import { focusState } from "@/Atoms";
import { ReactNode, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

export default function FormContent({
  label,
  children,
}: {
  label: string;
  children?: ReactNode;
}) {
  // let isFocused = false;
  // function focus() {
  //   isFocused = true;
  // }
  // function notFocus() {
  //   isFocused = false;
  // }
  const focus = useRecoilValue(focusState)
  const [borderColor, setborderColor] = useState<string>("slate-400")

  useEffect(() => {
    {(focus) ? setborderColor("primary") : setborderColor("slate-400")}
  }, [focus])

  return (
    <>
      <div className={`min-h-10 rounded-lg border-2 border-${borderColor} pl-6 pr-6 py-1.5 flex gap-2 items-stretch focus:ring-1 focus:ring-inset focus:ring-primary`}>
        <div className="w-28 flex items-start">
          <span className="mt-0.5 font-medium text-12 text-[#44475D] leading-20">
            {label}
          </span>
        </div>
        <div className="flex-1 flex flex-row justify-between items-stretch">{children}</div>
      </div>
    </>
  );
}
