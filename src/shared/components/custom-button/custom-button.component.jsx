
import "./custom-button.styles.scss";

const CustomButton = ({ children, type }) => {

          return (
                    <button className={`custom-button ${type ? "google-sign-in" : ""}`}>
                              {children}
                    </button>
          );

};

export default CustomButton;