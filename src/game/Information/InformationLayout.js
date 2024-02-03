import styles from "./InformationLayout.module.css";
import PropTypes from "prop-types";

export const InformationLayout = ({ status }) => {
  return <div className={styles.nformation}>{status}</div>;
};

InformationLayout.propTypes = {
  status: PropTypes.string,
};
