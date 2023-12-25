import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const RestaurantMenu = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };
  const getRestaurantMenu = useRestaurant(id);
  return !getRestaurantMenu ? (
    <Shimmer />
  ) : (
    <div className="mx-24 my-12">
      <div className="flex justify-between mb-8">
        <div className="flex-col">
          <p className="font-bold">
            {getRestaurantMenu?.data?.cards[0]?.card?.card?.info?.name}
          </p>
          <p>
            {getRestaurantMenu?.data?.cards[0]?.card?.card?.info?.cuisines.join(
              ", "
            )}
          </p>
          <div className="flex">
            <p>
              {getRestaurantMenu?.data?.cards[0]?.card?.card?.info?.areaName}
            </p>
            ,
            <p>
              {
                getRestaurantMenu?.data?.cards[0]?.card?.card?.info?.sla
                  .lastMileTravelString
              }
            </p>
          </div>
        </div>
        <div className="text-green-700">
          <div>
            <div className="flex border-red-200 border justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="lightgreen"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule="evenodd"
                />
              </svg>
              {getRestaurantMenu?.data?.cards[0]?.card?.card?.info?.avgRating}
            </div>
          </div>
          <p className="flex border-red-200 border justify-center">
            {
              getRestaurantMenu?.data?.cards[0]?.card?.card?.info
                ?.totalRatingsString
            }
          </p>
        </div>
      </div>
      <div className="flex w-72 justify-between">
        <div className="flex justify-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p>
            {
              getRestaurantMenu?.data?.cards[0]?.card?.card?.info?.sla
                ?.maxDeliveryTime
            }{" "}
            mins
          </p>
        </div>

        <div className="flex w-32 justify-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {
            getRestaurantMenu?.data?.cards[0]?.card?.card?.info
              ?.costForTwoMessage
          }
        </div>
      </div>
      <div>
        <p className=" border-t p-2 m-2 font-bold ">
          {
            getRestaurantMenu?.data?.cards[2]?.groupedCard?.cardGroupMap
              ?.REGULAR?.cards[4].card.card.title
          }
        </p>
        <ul>
          {Object.values(
            getRestaurantMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards.map(
              (item) => (
                <li
                  key={item.card.info.id}
                  className=" border-b p-2 m-2 h-30 flex justify-between items-center"
                >
                  <div>
                    <p>{item.card.info.name}</p>
                    <p className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mr-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      {item.card.info.defaultPrice
                        ? item.card.info.defaultPrice / 100
                        : item.card.info.price / 100}
                      <span className="hidden">
                        {
                          ((item.card.info.restaurantName =
                            getRestaurantMenu?.data?.cards[0]?.card?.card?.info?.name),
                          (item.card.info.restaurantid =
                            getRestaurantMenu?.data?.cards[0]?.card?.card?.info?.id))
                        }
                      </span>
                    </p>
                  </div>
                  <button
                    className="text-green-600 p-2 m-2 border w-16 rounded-md shadow-md hover:shadow-lg"
                    onClick={() => addFoodItem(item)}
                  >
                    Add
                  </button>
                </li>
              )
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
