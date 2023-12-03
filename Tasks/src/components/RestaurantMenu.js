import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../config";
const RestaurantMenu = () => {
  const { id } = useParams();
  const [getRestaurantMenu, setRestaurantMenu] = useState(null);
  useEffect(() => {
    getRestaurantsMenu();
  });
  async function getRestaurantsMenu() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.690765&lng=83.166629&restaurantId=" +
        id +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setRestaurantMenu(json);
  }
  return !getRestaurantMenu ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant id: {id}</h1>
        <h1>{getRestaurantMenu?.data?.cards[0]?.card?.card?.info?.name}</h1>
        <h2>{getRestaurantMenu?.data?.cards[0]?.card?.card?.info?.city}</h2>
        <h2>
          {getRestaurantMenu?.data?.cards[0]?.card?.card?.info?.avgRating}
        </h2>
        <img
          className="image1"
          src={
            IMG_CDN_URL +
            getRestaurantMenu?.data?.cards[0]?.card?.card?.info
              ?.cloudinaryImageId
          }
        />
      </div>
      <div>
        <h1>
          {
            getRestaurantMenu?.data?.cards[2]?.groupedCard?.cardGroupMap
              ?.REGULAR?.cards[4].card.card.title
          }
        </h1>
        <ul>
          {Object.values(
            getRestaurantMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards.map(
              (item) => <li key={item.card.info.id}>{item.card.info.name}</li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
