import { ReactNode, isValidElement, cloneElement } from "react";

export default function FormContent({ label, children }: { label: string, children?: ReactNode}) {
  // let isFocused = false; 
  // function focus() {
  //   isFocused = true;
  // }
  // function notFocus() {
  //   isFocused = false;
  // }

  return (
    <>
      <div className="h-[60px] rounded-[10px] border-[1px] border-slate-400 px-[35px] flex gap-[32px] items-center focus:ring-1 focus:ring-inset focus:ring-primary">
        <div className="w-[152px]">
          <span className="font-medium text-[18px] text-[#44475D]">{label}</span>
        </div>
        <div className="w-full">
          {children}
        </div>
      </div>
    </>
  );
}
