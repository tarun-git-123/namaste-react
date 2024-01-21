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
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if(onlineStatus===false) return <h1>Looks like you are offline!! Please check your internet</h1>;

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex p-4">
        <div className="flex mx-4">
          <input className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mx-2" placeholder="Search for anything..." type="text" name="search" value={searchText} onChange={(e)=>setSearchText(e.target.value) }/>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded" onClick={ ()=>{
            // filter the restaurant card and update in the UI
            // get searh data
            const filteredSearch = listOfRestaurant.filter( (res)=>{
              return res.info.name.toLowerCase().includes(searchText.toLowerCase())
            });
            setFilteredRestaurant(filteredSearch);
          } }>Search</button>
        </div>
        <button
          className="mx-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
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
      <div className="flex flex-wrap ml-8">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}><RestaurentCard resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
