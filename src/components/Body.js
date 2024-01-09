import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5962467&lng=88.4317342&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
  
    setListOfRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if(onlineStatus===false) return <h1>Looks like you are offline!! Please check your internet</h1>;

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-bar filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e)=>setSearchText(e.target.value) }/>
          <button className="search-btn" onClick={ ()=>{
            // filter the restaurant card and update in the UI
            // get searh data
            const filteredSearch = listOfRestaurant.filter( (res)=>{
              return res.info.name.toLowerCase().includes(searchText.toLowerCase())
            });
            setFilteredRestaurant(filteredSearch);
          } }>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const flteredData = listOfRestaurant.filter((res) => {
              return res.info.avgRating > 4;
            });
            setFilteredRestaurant(flteredData);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}><RestaurentCard resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
