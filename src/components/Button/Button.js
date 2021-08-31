import PropTypes from "prop-types";
import style from "../Button/Button.module.css";
import addClassNames from "../../utils/addClassNames";

const Button = ({ children, type }) => {
  const buttonClassNames = addClassNames("button", style.addContactBtn);

  return (
    <button type={type} className={buttonClassNames}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string.isRequired,
};
export default Button;
