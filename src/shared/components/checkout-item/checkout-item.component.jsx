import { useDispatch } from "react-redux";

const CheckoutItem = ({ cartItem }) => {

          const { name, imageUrl, quantity, price } = cartItem;

          const dispatch = useDispatch();

          return (
                    <div className="checkout-item">
                              <div className="image-container">
                                        <img src={imageUrl} alt="item" />
                              </div>
                              <span className="name">{name}</span>
                              <span className="quantity">
                                        <div className="arrow" onClick={() => dispatch(removeItem(cartItem))}>&#10094;</div>
                                        <span className="value">{quantity}</span>
                                        <div className="arrow" onClick={() => dispatch(addItem(cartItem))}>&#10095;</div>
                              </span>
                              <span className="price">{price}</span>
                              <div className="remove-button" onClick={() => dispatch(clearItemFromCart(cartItem))}>&#10005;</div>
                    </div>
          );
}

export default CheckoutItem;