import { useState } from "react";

interface Fish {
  id: number;
  name: string;
  imageUrl: string;
  rarity: string;
  price: string;
  size: string;
  location: string;
  nhMonths: string;
  shMonths: string;
  time: string;
}

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
                <div className="accordion-body">
                  <div className="container-sm text-center">
                    <div className="row">
                      <div>
                        <img src={fish.imageUrl} alt={fish.name} />
                      </div>
                      <div className="d-flex justify-content-center">
                        <div className="fish-card">
                          <div className="row">
                            <div className="fish-card-info fish-card-info-name">
                              {fish.name}
                            </div>
                          </div>
                          <div className="row fish-card-info fish-card-info-rarity">
                            Rarity: {fish.rarity}
                          </div>
                          <div className="row fish-card-info fish-card-info-price">
                            {fish.price} Bells
                          </div>
                          <div className="row fish-card-info fish-card-info-time">
                            Time: {fish.time}
                          </div>
                          <div className="row fish-card-info fish-card-info-location">
                            Location: {fish.location}
                          </div>
                          <div className="row fish-card-info fish-card-info-size">
                            Size: {fish.size}
                          </div>
                          <div
                            className="row fish-card-info fish-card-info-months"
                            style={{ width: "100%" }}
                          >
                            NH Months:
                            <div className="text-center">
                              {fish.nhMonths}
                            </div>
                          </div>
                          <div
                            className="row fish-card-info fish-card-info-months"
                            style={{ width: "100%" }}
                          >
                            SH Months:
                            <div className="text-center">
                              {fish.shMonths}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FishList;
