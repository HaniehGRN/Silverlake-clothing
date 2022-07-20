import { AiOutlinePlus } from "react-icons/ai";

import "./collection-item.styles.scss";
import "../../../assets/scss/icons.style.scss";

const CollectionItem = ({ item }) => {

          const { imageUrl, name, price } = item;

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
                    </div>
          );
}

export default CollectionItem;