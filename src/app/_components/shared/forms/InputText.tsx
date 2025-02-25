import React from "react";

type InputTextProps = React.InputHTMLAttributes<HTMLInputElement>;

export function InputText(props: InputTextProps) {
  return <input type="text" {...props} />;
}
