import PropTypes from "prop-types";
import style from "../IconButton/IconButton.module.css";
import addClassNames from "../../utils/addClassNames";

export const deleteContactBtnClassNames = addClassNames(
  "button",
  style.iconButton,
  style.deleteContactBtn
);

const IconButton = ({
  children,
  type,
  ariaLabel,
  width,
  height,
  onClick,
  className,
}) => {
  return (
    <button
      type={type}
      aria-label={ariaLabel}
      width={width}
      height={height}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
};

IconButton.propTypes = {
  type: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
};

export default IconButton;
