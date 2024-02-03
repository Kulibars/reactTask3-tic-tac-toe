import { Field } from "./Field/Field.js";
import { Information } from "./Information/Information.js";
import styles from "./GameLavout.module.css";
import PropTypes from "prop-types";

export const GameLayout = ({ ...props }) => {
  const { resetGame } = props;
  return (
    <div className={styles.gemeLuyoutContaner}>
      <Information {...props} />
      <Field {...props} />
      <button onClick={resetGame} className={styles.gameResetart}>
        Начать заново
      </button>
    </div>
  );
};
Field.propTypes = {
  resetGame: PropTypes.func,
  field: PropTypes.array,
  currentPlayer: PropTypes.string,
  setCurrentPlayer: PropTypes.func,
  setField: PropTypes.func,
  setIsDraw: PropTypes.func,
  setIsGameEnded: PropTypes.func,
  isGameEnded: PropTypes.bool,
  isDraw: PropTypes.bool,
};
