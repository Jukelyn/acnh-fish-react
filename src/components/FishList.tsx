import { useState } from "react";
import { Fish } from "./Fish";
import AccordionBody from "./AccordionBody";

interface Props {
  heading: string;
  items: Fish[];
  onSelectedFish: (item: string) => void;
}

function FishList({ heading, items, onSelectedFish }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setSelectedIndex((prevIndex) => (prevIndex === index ? null : index));
    onSelectedFish(items[index].name);
  };

  return (
    <div className="container">
      <h1 className="d-flex justify-content-center">{heading}</h1>
      {items.length === 0 && <p>No fish yet.</p>}
      <div className="container-sm">
        <div className="accordion" id="fishAccordion">
          {items.map((fish, index) => (
            <div className="accordion-item" key={fish.id}>
              <h2 className="accordion-header" id={`heading-${fish.id}`}>
                <button
                  className={`accordion-button ${
                    selectedIndex === index ? "" : "collapsed"
                  }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-${fish.id}`}
                  aria-expanded={selectedIndex === index}
                  aria-controls={`collapse-${fish.id}`}
                  onClick={() => handleToggle(index)}
                >
                  {fish.name}
                </button>
              </h2>
              <div
                id={`collapse-${fish.id}`}
                className={`accordion-collapse collapse ${
                  selectedIndex === index ? "show" : ""
                }`}
                aria-labelledby={`heading-${fish.id}`}
                data-bs-parent="#fishAccordion"
              >
                <AccordionBody fish={fish} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FishList;
