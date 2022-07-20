import { useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Menu from "../../../../shared/components/menu/menu.component";
import Collection from "../../../collection/collection.component";
import {
          selectTriggeredCollection,
          selectTriggeredCollectionName
} from "../../../../config/redux/features/products/products.selector";
import { fetchCollections } from "../../../../config/firebase/firebase.utils";
import { setFetchedCollections } from "../../../../config/redux/features/products/productsSlice";

import "./homepage.styles.scss";

const HomePage = () => {

          const TriggeredCollectionName = useSelector((state) => selectTriggeredCollectionName(state));
          // const collection = useSelector((state) => selectTriggeredCollection(state))
          const collections = useSelector((state) => state.products.collections);
          const isLoading = useSelector((state) => state.products.isLoading);
          const dispatch = useDispatch();

          useEffect(() => {
                    console.log("homepage rendered")
                    console.log(TriggeredCollectionName)
                    
          }, [TriggeredCollectionName])

          return (
                    <div className="homepage">
                              <Menu />
                              {
                                        isLoading ? <Collection /> : <Spinner />
                              }
                    </div>
          );
}

export default HomePage;