import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "../../store/uiSlice";
import store from "../../store";

const CartButton = () => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <button
      className={classes.button}
      onClick={() => dispatch(uiAction.toggle())}
    >
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
