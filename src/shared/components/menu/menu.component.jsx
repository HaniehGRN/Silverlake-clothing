import MenuItem from "../menu-item/menu-item.component";


const Menu = () => {
    return (
        <div className="menu-container">
            <div className="shirts">
                <MenuItem title="Shirts" />
            </div>
            <div className="dresses">
                <MenuItem title="Dresses" />
            </div>
            <div className="jeans">
                <MenuItem title="Jeans" />
            </div>
            <div className="jackets">
                <MenuItem title="Jackets" />
            </div>
            <div className="gymwear">
                <MenuItem title="Gymwear" />
            </div>
            <div className="blazers">
                <MenuItem title="Blazers" />
            </div>
            <div className="shoes">
                <MenuItem title="Shoes" />
            </div>
        </div>
    )
};

export default Menu;