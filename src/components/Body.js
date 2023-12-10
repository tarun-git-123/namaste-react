import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import {useState} from "react";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  return (
    <div className="body">
      <div className="search-bar filter">
        <button
          className="filter-btn"
          onClick={() => {
            const flteredData = listOfRestaurant.filter( (res) => {
                return res.info.avgRating>4
              }
            );
            setListOfRestaurant(flteredData)
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurentCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
