import { ReactNode } from "react";

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

  return (
    <>
      <div className="h-[40px] rounded-[10px] border-[1px] border-slate-400 pl-[21px] pr-[64px] py-[8px] flex gap-[8px] items-center focus:ring-1 focus:ring-inset focus:ring-primary">
        <div className="w-[106px] flex items-center">
          <span className="font-medium text-[13px] text-[#44475D]">
            {label}
          </span>
        </div>
        <div className="w-full h-full flex items-center">{children}</div>
      </div>
    </>
  );
}
