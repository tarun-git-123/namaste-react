import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";


const RestaurentMenu = () => {
  const {resId} = useParams();
  const resInfo = useRestaurentMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  return (
    <div className="menu">
      <h2>{name}</h2>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <ul>
        {
        itemCards!==undefined ?
          itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - {" Rs."}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          )) :''
        }
      </ul>
    </div>
  );
};

export default RestaurentMenu;
