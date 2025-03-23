import React from "react";

import { cn } from "@/utils";

type InputTextProps = React.InputHTMLAttributes<HTMLInputElement>;

export function InputText(props: InputTextProps) {
  const { className, ...rest } = props;

  const baseStyle = "w-full border border-gray-100 rounded-md p-2";

  return <input type="text" className={cn(baseStyle, className)} {...rest} />;
}
