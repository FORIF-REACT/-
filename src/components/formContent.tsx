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
      <div className="min-h-[40px] rounded-[10px] border-[1px] border-slate-400 pl-[21px] pr-[8px] py-[8px] flex gap-[8px] items-start focus:ring-1 focus:ring-inset focus:ring-primary">
        <div className="w-[106px] flex items-center">
          <span className="py-[2px] font-medium text-[13px] text-[#44475D] leading-[20px]">
            {label}
          </span>
        </div>
        <div className="flex-1 h-full flex items-center">{children}</div>
      </div>
    </>
  );
}
