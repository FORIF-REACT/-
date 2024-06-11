import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { clsx } from "clsx";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap border-2 font-sans font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-white border-primary text-primary hover:border-primary/70",
        filled: "bg-primary border-primary text-white hover:bg-primary/80",
        slate: "border-slate-400 text-darkgray hover:border-slate-400/50",
        slateFilled: "border-slate-400 bg-slate-400 text-white hover:border-slate-300 hover:bg-slate-300"
      },
      size: {
        sm: "h-[30px] rounded-full px-4 text-12",
        default: "h-[40px] rounded-md px-9 text-12",
        lg: "w-full h-[50px] rounded-md text-20",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={clsx(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export default Button;
