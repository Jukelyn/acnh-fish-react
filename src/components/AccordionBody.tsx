import FishCard from "./FishCard";
import { Fish } from "./Fish";

interface Props {
  fish: Fish;
}

const AccordionBody = ({ fish }: Props) => {
  return (
    <div className="accordion-body">
      <div className="container-sm text-center">
        <div className="row">
          <div>
            <img src={fish.imageUrl} alt={fish.name} />
          </div>
          <FishCard fish={fish} />
        </div>
      </div>
    </div>
  );
};

export default AccordionBody;
