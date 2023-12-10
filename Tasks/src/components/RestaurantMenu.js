import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../config";
import useRestaurant from "../utils/useRestaurant";
const RestaurantMenu = () => {
  const { id } = useParams();
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
          <p>
            <div className="flex border-red-200 border justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="lightgreen"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>
              {getRestaurantMenu?.data?.cards[0]?.card?.card?.info?.avgRating}
            </div>
          </p>
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
        <p>
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
        </p>
      </div>
      <div>
        <p>
          {
            getRestaurantMenu?.data?.cards[2]?.groupedCard?.cardGroupMap
              ?.REGULAR?.cards[4].card.card.title
          }
        </p>
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
