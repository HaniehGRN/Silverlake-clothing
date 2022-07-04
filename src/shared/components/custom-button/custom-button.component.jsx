
import "./custom-button.styles.scss";

const CustomButton = ({children, type, }) => {

          return(
                    <button className="custom-button">
                              {children}
                    </button>
          );

};

export default CustomButton;