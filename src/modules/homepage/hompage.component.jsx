import { useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Menu from "../../shared/components/menu/menu.component";
import Collection from "../collection/collection.component";
import { selectTriggeredCollection, selectTriggeredCollectionName, selectCollections } from "../../config/redux/features/products/products.selector";
import Spinner from "../../shared/components/spinner/spinner.component";

import "./homepage.styles.scss";

const HomePage = () => {

          const TriggeredCollectionName = useSelector((state) => selectTriggeredCollectionName(state));
          const { items } = useSelector((state) => selectTriggeredCollection(state))
          const collections = useSelector((state) => selectCollections(state));
          const isLoading = useSelector((state) => state.products.isLoading);
          const dispatch = useDispatch();

          useEffect(() => {
                    console.log("homepage rendered")
                    console.log(TriggeredCollectionName)
                    console.log(items)
          }, [TriggeredCollectionName])

          return (
                    <div className="homepage">
                              <Menu />
                              {
                                        isLoading ? <Spinner /> : <Collection items={items} />
                              }
                    </div>
          );
}

export default HomePage;