import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurentMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
      return (
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });
  return (
    <div>
      <h2 className="mt-4 text-center font-bold text-lg font-sans">{name}</h2>
      <p className="my-3 font-bold text-center text-md font-sans">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* category accordian */}
      {categories.map((category, index) => {
        return (
          <div key={index} className="w-6/12 m-auto">
            <RestaurantCategory
              key={category?.card?.card.title}
              data={category?.card?.card}
              showItems={index==showIndex && true}
              setShowIndex = {()=>setShowIndex(index)}
            />
            <div className="bg-gray-100 h-5"></div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurentMenu;
