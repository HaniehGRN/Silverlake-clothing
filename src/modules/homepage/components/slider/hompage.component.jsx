import { FcNext, FcPrevious } from "react-icons/fc";
import { BiRadioCircle } from "react-icons/bi";

import Menu from "../../../../shared/components/menu/menu.component";
import Collection from "../../../collection/collection.component";

import "./homepage.styles.scss";

const HomePage = () => {
          return (
                    <div className="homepage">
                              <Menu />
                              <Collection  />
                    </div>
          );
}

export default HomePage;