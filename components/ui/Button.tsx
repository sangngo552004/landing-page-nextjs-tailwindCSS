import { ButtonHTMLAttributes } from "react"
import clsx from "clsx"

type Variant = "primary" | "outline"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant
    fullWidth?: boolean
}

export default function Button({
                                   children,
                                   variant = "primary",
                                   fullWidth = false,
                                   className,
                                   ...props
                               }: ButtonProps) {
    return (
        <button
            className={clsx(
                "inline-flex items-center justify-center",
                "px-4 py-2",
                "rounded-lg",
                "text-sm",
                "transition-all duration-200 cursor-pointer active:scale-95", // Chưa đọc
                {
                    "bg-linear-to-r from-orange-btn-start via-orange-btn-mid to-orange-btn-end text-white hover:brightness-110 shadow-lg shadow-orange-900/20":
                        variant === "primary",

                    "border-2 border-orange-btn-end text-orange-btn-end bg-transparent hover:bg-orange-soft":
                        variant === "outline",
                },
                fullWidth ? "w-full" : "w-fit",
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
}