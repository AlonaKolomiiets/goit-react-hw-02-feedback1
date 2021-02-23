import React from "react";
// import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
};

// Section.propTypes = {

// };

export default Section;
