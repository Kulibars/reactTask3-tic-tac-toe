import { InformationLayout } from "./InformationLayout.js";
import PropTypes from "prop-types";

export const Information = ({ currentPlayer, isDraw, isGameEnded }) => {
  let status = `Ходит: ${currentPlayer}`;
  if (isGameEnded) {
    status = `Победил: ${currentPlayer}`;
  } else if (isDraw) {
    status = "Ничья";
  }

  return <InformationLayout status={status} />;
};

Information.propTypes = {
  isDraw: PropTypes.bool,
  isGameEnded: PropTypes.bool,
  currentPlayer: PropTypes.string,
};
