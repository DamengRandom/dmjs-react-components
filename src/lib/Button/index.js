import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const PrimaryButton = styled.button`
  background-color: white;
  color: #00a7f8;
  font-size: 12pt;
  outline: none;
  border: none;
  padding: 6pt 12pt;
  cursor: pointer;
  border: 1px solid #00a7f8;
`;

const SecondaryButton = styled.button`
  background-color: #00a7f8;
  color: white;
  font-size: 12pt;
  outline: none;
  border: none;
  padding: 6pt 12pt;
  cursor: pointer;
  border: 1px solid #00a7f8;
`;

const DangerButton = styled.button`
  background-color: #db2938;
  color: white;
  font-size: 12pt;
  outline: none;
  border: none;
  padding: 6pt 12pt;
  cursor: pointer;
  border: 1px solid #db2938;
`;

class Button extends React.Component {
  render() {
    const { type, text, pattern } = this.props;
    return (
      <div>
        {
          (!pattern || pattern === 'primary') &&
          <PrimaryButton type={type}>{text}</PrimaryButton>
        }
        {
          pattern === 'secondary' &&
          <SecondaryButton type={type}>{text}</SecondaryButton>
        }
        {
          pattern === 'danger' &&
          <DangerButton type={type}>{text}</DangerButton>
        }
      </div>
    );
  }
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  pattern: PropTypes.string
} 

export { Button };
