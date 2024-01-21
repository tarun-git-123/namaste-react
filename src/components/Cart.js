import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = ()=>{
    dispatch(clearCart())
  }
  return (
    <div className="w-6/12 m-auto text-center pt-10">
      <h1 className="font-bold text-xl border-b-2">Cart List</h1>
      <button className=" bg-blue-600 text-white p-2 rounded-lg mt-3" onClick={handleClearCart}>Clear Cart</button>
      { cartItems.length===0 && <p className="font-medium text-lg mt-3">Cart is empty! Please add item to cart</p>}
      <div className="w-10/12 p-3 m-auto">
        <ItemList items={cartItems}/>
      </div>
    </div>
  );
};

export default Cart;
