import PropTypes from "prop-types";
import style from "../Filter/Filter.module.css";

const Filter = ({ onFilterChange }) => {
  return (
    <label className={style.contactsFilterLabel}>
      <span className={style.contactsFilterLabelText}>
        Find contacts by name
      </span>
      <input
        type="text"
        className={style.contactsFilterInput}
        onChange={onFilterChange}
      />
    </label>
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
