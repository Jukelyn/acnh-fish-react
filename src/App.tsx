// import Alert from "./components/Alert";
// import Button from "./components/Button";
import FishList from "./components/FishList";
import { useState, useEffect } from "react";

function App() {
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  const [fish_list, setFish] = useState([]);

  useEffect(() => {
    fetchFish();
  }, []);

  const fetchFish = async () => {
    console.log("Fetching fish...");
    const response = await fetch("http://127.0.0.1:5000/get_fish_list");
    const data = await response.json();
    console.log("Fetched data:", data);
    console.log("Fish array:", data.fish);

    setFish(data.fish);
  };

  return (
    <div className="d-flex justify-content-center">
      <FishList
        heading="All Fish"
        items={fish_list}
        onSelectedFish={handleSelectedItem}
      />
    </div>
  );
}

export default App;
