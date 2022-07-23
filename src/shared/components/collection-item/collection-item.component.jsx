import { useDispatch, useSelector } from "react-redux";

import { AiOutlinePlus } from "react-icons/ai";

import { addItem, setTotal } from "../../../config/redux/features/cart/cartSlice";
import { addItemToCart, calTotal } from "../../../config/redux/features/cart/cart.utils";


import "./collection-item.styles.scss";
import "../../../assets/scss/icons.style.scss";

const CollectionItem = ({ item }) => {

          const { imageUrl, name, price } = item;
          const dispatch = useDispatch();
          const cartItems = useSelector((state) => state.cart.items)
          const total = useSelector((state) => state.cart.total)

          const handleAddItem = () => {
                    const updatedCartItems = addItemToCart(cartItems, item);
                    dispatch(addItem(updatedCartItems));
                    const updatedTotal = calTotal(total, price);
                    dispatch(setTotal(updatedTotal));
          }

          return (
                    // View : the UI defenition
                    <div className="collection-item">
                              <div className="image"
                                        style={{
                                                  backgroundImage: `url(${imageUrl})`
                                        }}
                              ></div>
                              <div className="collection-footer">
                                        <div className="name-price">
                                                  <span className="name">{name}</span>
                                                  <span className="price">{`$ ${price}`}</span>
                                        </div>
                                        <AiOutlinePlus className="icon" onClick={handleAddItem} />
                              </div>
                    </div>
          );
}

export default CollectionItem;