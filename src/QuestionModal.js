import React, { useState } from "react";
import PropTypes from "prop-types";

const QuestionModal = ({
  category,
  points,
  question,
  answer,
  onClose,
  players,
  updatePlayerPoints
}) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const addPoints = (playerName) => {
    updatePlayerPoints(playerName);
    onClose();
  };

  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {category} for {points} points
            </h5>
            <button type="button" className="close" onClick={onClose}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>{question}</p>
            {showAnswer && (
              <p>
                <strong>Answer:</strong> {answer}
              </p>
            )}
            {showAnswer && (
              <div>
                {players.map((player, index) => (
                  <button
                    key={index}
                    className="btn btn-dark"
                    onClick={() => addPoints(player.name)}
                  >
                    {player.name}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="modal-footer">
            {!showAnswer && (
              <button className="btn btn-dark" onClick={handleShowAnswer}>
                Show Answer
              </button>
            )}
            <button className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

QuestionModal.propTypes = {
  category: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  players: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      points: PropTypes.number.isRequired,
    })
  ).isRequired,
  updatePlayerPoints: PropTypes.func.isRequired,
};

export default QuestionModal;
