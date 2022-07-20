import CollectionItem from "../../shared/components/collection-item/collection-item.component";

import "./collection.styles.scss"

/**item.forEach */

const Collection = ({ items, title }) => {
          return (
                    <div className="collection-container">
                              {/* {
                                        items.map((item) => <CollectionItem item={item} />)
                              } */}
                              {/* <CollectionItem /> */}
                    </div>
          );
}

export default Collection;
