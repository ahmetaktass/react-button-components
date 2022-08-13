import React from "react";
import "./button.scss";

const VARİANTS = [
  "btn--primary",
  "btn--primary--outline",
  "btn--secondary",
  "btn--secondary--outline",
];

const SİZE = ["small", "medium", "large", "fullWidth"];
const RADİUS = ["radius"];

const Button = ({ children, variant, type, size, onClick, radius }) => {
  const checkButtonVariants = VARİANTS.includes(variant)
    ? variant
    : VARİANTS[0];

  const checkButtonSize = SİZE.includes(size) ? size : SİZE[0];
  const checkButtonRadius = RADİUS.includes(radius) ? radius : RADİUS[radius];

  return (
    <button
      className={`btn ${checkButtonVariants} ${checkButtonSize} ${checkButtonRadius} `}
      onClick={onClick}
      type={type}
      radius={radius}
    >
      {" "}
      {children}{" "}
    </button>
  );
};

export default Button;
