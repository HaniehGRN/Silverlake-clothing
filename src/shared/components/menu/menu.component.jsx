import MenuItem from "../menu-item/menu-item.component";
import { useState } from "react";

import "./menu.styles.scss";

const Menu = () => {

    const [clickState, setClickState] = useState(1);

    const handleClick = (e, num) => {
        e.preventDefault();
        console.log(num)
        setClickState(num);
    }

    return (
        <div className="menu-container">
            <a
                className={`collection ${clickState == "1 " ? "clicked" : ""}`}
                href="/" onClick={(e) => handleClick(e, 1)}>Shirts</a>
            <a
                className={`collection ${clickState == "2 " ? "clicked" : ""}`}
                href="/" onClick={(e) => handleClick(e, 2)}>Dresses</a>
            <a
                className={`collection ${clickState == "3" ? "clicked" : ""}`}
                href="/" onClick={(e) => handleClick(e, 3)}>Jeans</a>
            <a
                className={`collection ${clickState == "4 " ? "clicked" : ""}`}
                href="/" onClick={(e) => handleClick(e, 4)}>Jackets</a>
            <a
                className={`collection ${clickState == "5" ? "clicked" : ""}`}
                href="/" onClick={(e) => handleClick(e, 5)}>Gymwear</a>
            <a
                className={`collection ${clickState == "6" ? "clicked" : ""}`}
                href="/" onClick={(e) => handleClick(e, 6)}>Blazers</a>
            <a
                className={`collection ${clickState == "7 " ? "clicked" : ""}`}
                href="/" onClick={(e) => handleClick(e, 7)}>Shoes</a>
        </div >
    )
};

export default Menu;