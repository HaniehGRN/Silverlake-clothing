import MenuItem from "../menu-item/menu-item.component";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCollections } from "../../../config/firebase/firebase.utils";
import { Link } from "react-router-dom";
import { setTriggeredCollection, setTriggeredCollectionName } from "../../../config/redux/features/products/productsSlice";
import {selectTriggeredCollectionName, selectCollections} from "../../../config/redux/features/products/products.selector"

import "./menu.styles.scss";

const Menu = () => {

    const [clickState, setClickState] = useState("shirts");
    const dispatch = useDispatch();
    // const TriggeredCollectionName = useSelector(() => selectTriggeredCollectionName());
    // const collections = useSelector((state) => selectCollections(state))

    const handleClick = (e, collectionTitle) => {
        e.preventDefault();
        setClickState(collectionTitle);
        dispatch(setTriggeredCollectionName(collectionTitle));
        console.log(collectionTitle)
    }

    return (
        <div className="menu-container">
            <Link
                className={`collection ${clickState === "shirts" ? "clicked" : ""}`}
                to="/" onClick={(e) => handleClick(e, "shirts")}>Shirts</Link>
            <Link
                className={`collection ${clickState === "dresses" ? "clicked" : ""}`}
                to="/dresses" onClick={(e) => handleClick(e, "dresses")}>Dresses</Link>
            <Link
                className={`collection ${clickState === "jeans" ? "clicked" : ""}`}
                to="/jeans" onClick={(e) => handleClick(e, "jeans")}>Jeans</Link>
            <Link
                className={`collection ${clickState === "jackets" ? "clicked" : ""}`}
                to="/jackets" onClick={(e) => handleClick(e, "jackets")}>Jackets</Link>
            <Link
                className={`collection ${clickState === "gymwear" ? "clicked" : ""}`}
                to="/gymwear" onClick={(e) => handleClick(e, "gymwear")}>Gymwear</Link>
            <Link
                className={`collection ${clickState === "blazers" ? "clicked" : ""}`}
                to="/blazers" onClick={(e) => handleClick(e, "blazers")}>Blazers</Link>
            <Link
                className={`collection ${clickState === "shoes" ? "clicked" : ""}`}
                to="/shoes" onClick={(e) => handleClick(e, "shoes")}>Shoes</Link>
        </div >
    )
};

export default Menu;