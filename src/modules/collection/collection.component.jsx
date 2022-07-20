import CollectionItem from "../../shared/components/collection-item/collection-item.component";

import "./collection.styles.scss";

const Collection = ({ items }) => {
          return (
                    <div className="collection-container">
                              {
                                        items.map((item, id) => <CollectionItem key={id} item={item} />)
                              }
                    </div>
          );
}

export default Collection;
