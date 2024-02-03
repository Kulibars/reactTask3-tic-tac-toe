import { FieldLavout } from "./FieldLavout.js";
import PropTypes from "prop-types";

export const Field = ({
  field,
  setField,
  currentPlayer,
  setCurrentPlayer,
  isDraw,
  setIsDraw,
  isGameEnded,
  setIsGameEnded,

  ...props
}) => {
  function getWinner(field) {
    const WIN_PATTERNS = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < WIN_PATTERNS.length; i++) {
      let el = WIN_PATTERNS[i];
      let fildEl = [];
      for (let j = 0; j < el.length; j++) {
        fildEl.push(field[el[j]]);
      }
      if (fildEl.join("") === "XXX") {
        setCurrentPlayer("X");
        setIsGameEnded(true);
      } else if (fildEl.join("") === "OOO") {
        setCurrentPlayer("O");
        setIsGameEnded(true);
      }
    }
  }

  function checkDraw(field) {
    let x = field.every((el) => {
      return el !== "";
    });

    return setIsDraw(x);
  }
  function playersMove(el, index) {
    if (!isGameEnded) {
      let copyField = Object.assign([], field);
      let indexValue = index;
      if (el === "") {
        copyField.splice(indexValue, 1, currentPlayer);
        setField(copyField);

        if (currentPlayer === "X") {
          setCurrentPlayer("O");
        } else {
          setCurrentPlayer("X");
        }

        checkDraw(copyField);
        getWinner(copyField);
      }
    }
  }

  return <FieldLavout playersMove={playersMove} field={field} />;
};

Field.propTypes = {
  field: PropTypes.array,
  currentPlayer: PropTypes.string,
  setCurrentPlayer: PropTypes.func,
  setField: PropTypes.func,
  setIsDraw: PropTypes.func,
  setIsGameEnded: PropTypes.func,
  isGameEnded: PropTypes.bool,
  isDraw: PropTypes.bool,
};
