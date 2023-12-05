export function filterData(searchInp, restaurantList) {
  const filterData = restaurantList.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchInp.toLowerCase())
  );
  return filterData;
}
