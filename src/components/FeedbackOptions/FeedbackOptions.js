import React from "react";

// import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((el) => (
        <button
          key={el}
          type="button"
          onClick={() => {
            onLeaveFeedback(el);
          }}
        >
          {el}
        </button>
      ))}
    </div>
  );
};

// FeedbackOptions.propTypes = {

// };

export default FeedbackOptions;