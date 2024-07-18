import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartAction } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
const ProductItem = ({ title, id, price, description }) => {
  const dispatch = useDispatch();

  
  function addToCartHandler() {
    dispatch(cartAction.addItemToCart({ id, price, title }));
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
