import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItems";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const clearCartItems = () => {
    dispatch(clearCart());
  };
  const items = useSelector((store) => store.cart.items);
  return (
    <>
      <div>
        <button className="bg-green-200 p-2 m-2" onClick={clearCartItems}>
          Clear Cart
        </button>
      </div>
      {items.length > 0
        ? items.map((item) => (
            <div className="p-2 mr-6 ml-6">
              <CartItem key={item.card.info.id} {...item.card.info} />
            </div>
          ))
        : "No Items in the cart"}

      {console.log(items)}
    </>
  );
};

export default Cart;
