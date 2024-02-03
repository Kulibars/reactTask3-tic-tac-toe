import styles from "./FieldLavout.module.css";
import PropTypes from "prop-types";

export const FieldLavout = ({ playersMove, field }) => {
  return field.map((el, index) => (
    <button
      className={styles.buttons}
      key={index}
      onClick={() => playersMove(el, index)}
    >
      {el}
    </button>
  ));
};

FieldLavout.propTypes = {
  field: PropTypes.array,
  playersMove: PropTypes.func,
};
