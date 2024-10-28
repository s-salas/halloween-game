import React from 'react';
import PropTypes from 'prop-types';

const SetUpBoard = ({ categories, questions, onQuestionClick }) => {
  const handleQuestionClick = (catIndex, questionId) => {
    const points = (questionId + 1) * 100;
    onQuestionClick(catIndex, points, questionId);
  };

  return (
    <div className="container board">
      {/* Row for categories */}
      <div className="row text-center mb-4">
        {categories.map((category, catIndex) => (
          <div key={catIndex} className="col">
            <h2>{category}</h2>
          </div>
        ))}
      </div>
      
      {/* Rows for questions under each category */}
      {questions[0].map((_, questionId) => (
        <div key={questionId} className="row text-center mb-2">
          {questions.map((_, catIndex) => {
            const points = (questionId + 1) * 100;
            return (
              <div key={catIndex} className="col">
                <p
                  className="bg-black bg-gradient text-light fs-4 mx-0 mb-1 p-2"
                  style={{ margin: '0.1rem' }}
                  onClick={() => handleQuestionClick(catIndex, questionId)}
                >
                  {points}
                </p>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

SetUpBoard.propTypes = {
  categories: PropTypes.array.isRequired,
  questions: PropTypes.array.isRequired,
  onQuestionClick: PropTypes.func.isRequired,
};

export default SetUpBoard;
