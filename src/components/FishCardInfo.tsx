import { ReactNode, CSSProperties } from "react";
import { Fish } from "./Fish";

interface Props {
  fish: Fish;
  fishProperty: keyof Fish;
  children: ReactNode;
  reverse?: boolean;
  customStyle?: CSSProperties;
}

const FishCardInfo = ({
  fish,
  fishProperty,
  children,
  reverse = false,
  customStyle = {},
}: Props) => {
  const className = `row fish-card-info ${
    fishProperty === "nhMonths" || fishProperty === "shMonths"
      ? "fish-card-info-months"
      : `fish-card-info-${fishProperty}`
  }`;

  return (
    <div className={className} style={customStyle}>
      {fishProperty === "nhMonths" || fishProperty === "shMonths" ? (
        children
      ) : reverse ? (
        <>
          {fish[fishProperty]} {children}
        </>
      ) : (
        <>
          {children} {fish[fishProperty]}
        </>
      )}
    </div>
  );
};

export default FishCardInfo;
