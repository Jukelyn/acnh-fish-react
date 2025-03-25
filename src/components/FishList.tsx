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
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <div className="container">
        <h1 className="d-flex justify-content-center">{heading}</h1>
        {items.length === 0 && <p>No fish yet.</p>}
        <div className="list-group">
          {items.map((fish, index) => (
            <a
              href="#"
              key={fish.id}
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => {
                setSelectedIndex(index);
                onSelectedFish(fish.name);
              }}
            >
              {fish.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default FishList;
