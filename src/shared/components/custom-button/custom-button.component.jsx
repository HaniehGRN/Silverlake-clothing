
import "./custom-button.styles.scss";

const CustomButton = ({ children, type, onclick }) => {

          return (
                    <button 
                    className={`custom-button ${type ? "google-sign-in" : ""}`}
                    onClick={onclick}
                    >
                              {children}
                    </button>
          );

};

export default CustomButton;