import React from "react";

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label: string;
  labelClassName?: string;
}

export default function Radio({
  className,
  label,
  labelClassName,
  ...props
}: RadioProps) {
  const baseClass = "mr-1";
  return (
    <label className={labelClassName}>
      <input type="radio" className={baseClass + " " + className} {...props} />
      {label}
    </label>
  );
}
