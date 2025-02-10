import type React from "react"

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg"
}

export function Button({ size = "md", children, ...props }: ButtonProps) {
  const sizeClass = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }[size]

  return (
    <button
      className={`rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${sizeClass} ${props.className}`}
      {...props}
    >
      {children}
    </button>
  )
}

