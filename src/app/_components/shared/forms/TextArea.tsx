import React from "react";

import { cn } from "@/utils";

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextArea(props: TextAreaProps) {
  const { className, ...rest } = props;

  const baseStyle =
    "w-full h-[] border border-gray-100 rounded-md p-2 md:h-[8em]";

  return <textarea className={cn(baseStyle, className)} {...rest} />;
}
