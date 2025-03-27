import { ReactNode, CSSProperties } from "react";
import { Fish } from "./Fish";

interface FishCardProps {
  fish: Fish;
}

interface FishCardInfoProps {
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
}: FishCardInfoProps) => {
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

const FishCard = ({ fish }: FishCardProps) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="fish-card">
        <div className="row">
          <div
            className="fish-card-info fish-card-info-name"
            style={{ textDecorationLine: "underline" }}
          >
            {fish.name} Information
          </div>
        </div>

        <FishCardInfo fish={fish} fishProperty="rarity">
          Rarity:{" "}
        </FishCardInfo>
        <FishCardInfo fish={fish} fishProperty="price" reverse={true}>
          Bells
        </FishCardInfo>
        <FishCardInfo fish={fish} fishProperty="time">
          Time:{" "}
        </FishCardInfo>
        <FishCardInfo fish={fish} fishProperty="location">
          Location:{" "}
        </FishCardInfo>
        <FishCardInfo fish={fish} fishProperty="size">
          Size:{" "}
        </FishCardInfo>

        <FishCardInfo
          fish={fish}
          fishProperty="nhMonths"
          customStyle={{ width: "100%" }}
        >
          NH Months: <div className="text-center">{fish.nhMonths}</div>
        </FishCardInfo>
        <FishCardInfo
          fish={fish}
          fishProperty="shMonths"
          customStyle={{ width: "100%" }}
        >
          SH Months: <div className="text-center">{fish.shMonths}</div>
        </FishCardInfo>
      </div>
    </div>
  );
};

export default FishCard;
