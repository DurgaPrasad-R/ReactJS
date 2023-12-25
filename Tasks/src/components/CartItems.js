import { IMG_CDN_URL } from "../config";
// TODO: You have to allow cart from only one restaurant
const CartItem = ({
  name,
  imageId,
  category,
  price,
  defaultPrice,
  restaurantName,
  restaurantId,
}) => {
  return (
    <>
      <div className="flex justify-between border-b-2 p-2">
        <div className="flex">
          <div className="flex justify-center items-center">
            <div>
              <p className="font-bold">{restaurantName + "-" + category}</p>
              <p>{name}</p>
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
                {defaultPrice ? defaultPrice / 100 : price / 100}
              </p>
            </div>
          </div>
        </div>
        {imageId ? (
          <img
            className="w-36 h-auto flex justify-center items-center"
            src={IMG_CDN_URL + imageId}
          ></img>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default CartItem;
