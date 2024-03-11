import { useState } from "react";
import "./App.css";
import ShippingList from "./components/ShippingList";
import AddShipment from "./components/AddShipment";

let items = [
  "Acrylic Prime Galvalume Coil",
  "BTP Prime Aluminum Coil",
  "Painted Prime Galvalume Coil",
  "Red Oxide Purlin",
];

const App = () => {
  const [itemData, setItemData] = useState(items);

  return (
    <>
      <div>
        <h2>Shipping List</h2>
      </div>
      <ShippingList itemData={itemData} />
      <AddShipment setItemData={setItemData} />
    </>
  );
};

export default App;
