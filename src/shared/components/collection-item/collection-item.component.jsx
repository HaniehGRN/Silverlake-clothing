import { AiOutlinePlus } from "react-icons/ai";
// import { useDispatch } from "react-redux";

// import CustomButton from "../custom-button/custom-button.component";
// import { addItem } from "../../redux/cart/cart.actions";

import "./collection-item.styles.scss";
import "../../../assets/scss/icons.style.scss";

const CollectionItem = ({ item }) => {

          // const dispatch = useDispatch();

          const imageUrl = "https://i.ibb.co/GCCdy8t/womens.png";
          const name = "blue jean";
          const price = 19.8;

          // const { name, price, imageUrl } = item;
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
                                        <AiOutlinePlus className="icon" />
                              </div>

                              {/* <CustomButton onClick={() => dispatch(addItem(item))} inverted>add to cart</CustomButton> */}
                    </div>
          );
}

export default CollectionItem;