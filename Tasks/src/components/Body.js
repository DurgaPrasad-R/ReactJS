import { restaurants } from "../config";
import RestoCard from "./RestoCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInp, setSearchInp] = useState("");
  useEffect(() => {
    getRestaurants();
  }, []);
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6851243&lng=83.2035471"
    );
    const json = await data.json();
    // console.log(json);
    setRestaurantList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const isOffline = useOnline();
  if (isOffline) {
    return <h1>You are offline</h1>;
  }
  if (!restaurantList) {
    return <h1>No Data</h1>;
  }
  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <div className="m-4 flex justify-center">
          <input
            type="text"
            className="mr-2 p-2 focus:outline-none w-96"
            placeholder="Search"
            value={searchInp}
            onChange={(e) => setSearchInp(e.target.value)}
          />
          <button
            className="p-2"
            onClick={() => {
              const data = filterData(searchInp, restaurantList);
              setFilteredRestaurants(data);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestoCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
