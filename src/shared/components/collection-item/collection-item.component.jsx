import { AiOutlinePlus } from "react-icons/ai";
<<<<<<< HEAD
=======
// import { useDispatch } from "react-redux";

// import CustomButton from "../custom-button/custom-button.component";
// import { addItem } from "../../redux/cart/cart.actions";
>>>>>>> 4843a7dae4a05d5068f853dadeb1be65786a1c83

import "./collection-item.styles.scss";
import "../../../assets/scss/icons.style.scss";

const CollectionItem = ({ item }) => {

<<<<<<< HEAD
          const { imageUrl, name, price } = item;

=======
          // const dispatch = useDispatch();

          const imageUrl = "https://i.ibb.co/GCCdy8t/womens.png";
          const name = "blue jean";
          const price = 19.8;

          // const { name, price, imageUrl } = item;
>>>>>>> 4843a7dae4a05d5068f853dadeb1be65786a1c83
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
<<<<<<< HEAD
=======

                              {/* <CustomButton onClick={() => dispatch(addItem(item))} inverted>add to cart</CustomButton> */}
>>>>>>> 4843a7dae4a05d5068f853dadeb1be65786a1c83
                    </div>
          );
}

export default CollectionItem;