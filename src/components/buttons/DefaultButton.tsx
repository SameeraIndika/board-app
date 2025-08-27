import React from "react";
import { LucideIcon } from "lucide-react";

// Color variant types
export type ColorVariantType = "primary" | "link";

// Get color variant
const getColorVariant = (colorvariant?: ColorVariantType) => {
  switch (colorvariant) {
    case "primary":
      return "bg-tc_primary hover:opacity-95 text-tc_white";
    case "link":
      return "text-tc_accent hover:underline underline-offset-2";

    default:
      return "bg-tc_primary hover:opacity-95 text-tc_white";
  }
};

export interface IButtonProps {
  type?: "button" | "submit";
  isLink?: boolean;
  colorvariant?: ColorVariantType;
  buttonWidthClass?: string;
  label?: string;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  onClick?: () => void;
}

export const DefaultButton = ({
  type = "button",
  isLink = false,
  colorvariant = "primary",
  buttonWidthClass = "w-fit",
  label,
  icon: Icon,
  iconPosition = "left",
  onClick,
  ...props
}: IButtonProps) => {
  return (
    <button
      {...props}
      type={type}
      className={`      
      flex items-center gap-x-3 rounded-md transition-all duration-200 ease-linear font-semibold text-xs capitalize whitespace-nowrap
      ${isLink ? "" : "h-12 py-1 px-4"}
      ${getColorVariant(colorvariant)} ${buttonWidthClass}`}
      onClick={onClick}
    >
      {Icon && iconPosition == "left" && <Icon width={20} height={20} />}
      {label}
      {Icon && iconPosition == "right" && <Icon width={20} height={20} />}
    </button>
  );
};
