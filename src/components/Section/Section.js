import PropTypes from "prop-types";
import style from "../Section/Section.module.css";

const Section = ({ children }) => {
  return <section className={style.section}>{children}</section>;
};

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
