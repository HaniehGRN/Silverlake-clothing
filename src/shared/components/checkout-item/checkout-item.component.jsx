import { useDispatch, useSelector } from "react-redux";

import { TiMinus, TiPlus, TiTimes } from "react-icons/ti";

import { removeItem, addItem, clearItemFromCart } from "../../../config/redux/features/cart/cartSlice";
import { addItemToCart, removeItemFromCart } from "../../../config/redux/features/cart/cart.utils";

import "./checkout-item.styles.scss";
import { useEffect } from "react";

const CheckoutItem = ({ cartItem, cartItems }) => {

          const { name, imageUrl, quantity, price } = cartItem;

          const dispatch = useDispatch();

          useEffect(() => {
                    console.log(name, imageUrl, quantity, price)
          })

          const handleAddItem = () => {
                    const updatedCartItems = addItemToCart(cartItems, cartItem);
                    dispatch(addItem(updatedCartItems));
          }

          const handleRemoveItem = () => {
                    const updatedCartItems = removeItemFromCart(cartItems, cartItem);
                    dispatch(removeItem(updatedCartItems))
          }

          const handleRemove = () => {
                    dispatch(clearItemFromCart(cartItem));
          }

          return (
                    <div className="checkout-item">
                              <div className="image-container">
                                        <img src={imageUrl} alt="item" />
                              </div>
                              <div className="other-info">
                                        <div className="line-one">
                                                  <span className="name">{name}</span>
                                                  <div className="remove-button" onClick={handleRemove}><TiTimes /></div>
                                        </div>
                                        <div className="line-two">
                                                  <span className="quantity">
                                                            <div className="arrow" onClick={handleRemoveItem}><TiMinus /></div>
                                                            <span className="value">{quantity}</span>
                                                            <div className="arrow" onClick={handleAddItem}><TiPlus /></div>
                                                  </span>
                                                  <span className="price">x {price}</span>
                                        </div>
                              </div>
                    </div>
          );
}

export default CheckoutItem;