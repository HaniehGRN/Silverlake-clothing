import CollectionItem from "../../shared/components/collection-item/collection-item.component";

<<<<<<< HEAD
import "./collection.styles.scss";

const Collection = ({ items }) => {
          return (
                    <div className="collection-container">
                              {
                                        items.map((item, id) => <CollectionItem key={id} item={item} />)
                              }
=======
import "./collection.styles.scss"

/**item.forEach */

const Collection = ({ items, title }) => {
          return (
                    <div className="collection-container">
                              {/* {
                                        items.map((item) => <CollectionItem item={item} />)
                              } */}
                              {/* <CollectionItem /> */}
>>>>>>> 4843a7dae4a05d5068f853dadeb1be65786a1c83
                    </div>
          );
}

export default Collection;
