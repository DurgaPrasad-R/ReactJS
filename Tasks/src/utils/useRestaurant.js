import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../config";
const useRestaurant = (id) => {
  const [getRestaurantMenu, setRestaurantMenu] = useState(null);
  useEffect(() => {
    getRestaurantMenuInfo();
  }, []);
  async function getRestaurantMenuInfo() {
    const data = await fetch(FETCH_MENU_URL + id);
    const json = await data.json();
    setRestaurantMenu(json);
  }
  return getRestaurantMenu;
};

export default useRestaurant;
