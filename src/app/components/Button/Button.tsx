import React from "react";
import styles from "./Button.module.css";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: "solid" | "outline" | "text";
  bgColor?: string;
  color?: string;
  classNames?: string;
}

export const Button = ({
  children,
  variant,
  bgColor = "#000",
  color = "#fff",
  classNames,
  ...props
}: IButton) => {
  let variantClass = styles.solid;
  let style: React.CSSProperties = { background: bgColor, color };

  if (variant === "outline") {
    variantClass = styles.outline;
    style = { borderColor: bgColor, color: bgColor, background: "transparent" };
  } else if (variant === "text") {
    variantClass = styles.text;
    style = {
      background: "transparent",
      color,
      border: "none",
      boxShadow: "none",
    };
  }

  return (
    <button
      {...props}
      className={`${styles.btn} ${variantClass} ${classNames || ""}`.trim()}
      style={style && props.style ? { ...style, ...props.style } : style}
    >
      {children}
    </button>
  );
};
