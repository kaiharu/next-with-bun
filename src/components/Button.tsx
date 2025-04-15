import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  colorGray?: boolean;
  colorBlue?: boolean;
  colorRed?: boolean;
  colorGreen?: boolean;
  className?: string;
}

export default function Button({
  colorGray,
  colorBlue,
  colorRed,
  colorGreen,
  className,
  ...props
}: ButtonProps) {
  const baseClass = "rounded-md px-6 py-3 text-white";
  const colorClass = colorGray
    ? "bg-zinc-500 hover:bg-zinc-600"
    : colorBlue
    ? "bg-sky-600 hover:bg-sky-700"
    : colorRed
    ? "bg-red-600 hover:bg-red-700"
    : colorGreen
    ? "bg-green-600 hover:bg-green-700"
    : "";

  return (
    <button
      className={baseClass + " " + colorClass + " " + className}
      {...props}
    />
  );
}
