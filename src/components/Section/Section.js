import React from "react";
import PropTypes from "prop-types";
import { Title, Div } from "./Section.styled";

const Section = ({ title, children }) => {
  return (
    <Div>
      <Title>{title}</Title>
      {children}
    </Div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
