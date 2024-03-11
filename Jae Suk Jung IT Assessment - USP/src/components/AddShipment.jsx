import { useState, useRef } from "react";

const AddShipment = ({ setItemData }) => {
  const [showForm, setShowForm] = useState(false);
  const itemNameRef = useRef(null);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = () => {
    // setItemData()
    //did not have enough time to finish form/adding or removing capabilities. I would use this function here to adjust the list of items by using ref to grab the new item added in the form. Removing the items from the list is not too difficult as well since I am just taking the item off the array. I ran out of time, but if I had more time I would definitely be able to finish this assessment!
  };

  return (
    <>
      <button onClick={toggleForm}>Add New Shipment</button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <label>
            Item Name:
            <input type="text" ref={itemNameRef} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
};

export default AddShipment;
