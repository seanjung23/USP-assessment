import ShippingListEntry from "./ShippingListEntry";

const ShippingList = ({ itemData }) => {
  return (
    <>
      <div>
        <ul>
          {itemData.map((item, index) => (
            <ShippingListEntry key={index} item={item} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default ShippingList;
