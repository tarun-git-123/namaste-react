import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data,showItems,setShowIndex }) => {
  const [showItem, setShowItem] = useState(showItems)
  const handleAccordian = () => {
    setShowIndex()
    setShowItem(!showItem);
  };
  return (
    <div>
      <div className="p-3 cursor-pointer shadow-sm">
        <div className="flex justify-between" onClick={handleAccordian}>
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="text-sm">🔽</span>
        </div>
        <div className="mt-2">
          {showItems && showItem &&<ItemList items={data.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
