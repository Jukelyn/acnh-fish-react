import { Fish } from "./Fish";
import FishCardInfo from "./FishCardInfo";

interface Props {
  fish: Fish;
}

const FishCard = ({ fish }: Props) => {
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
