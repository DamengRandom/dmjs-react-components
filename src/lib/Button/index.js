import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const ButtonWithBackground = styled.button`
  background-color: #00a7f8;
  color: white;
  font-size: 12pt;
  outline: none;
  border: none;
  padding: 6pt 12pt;
  cursor: pointer;
`;

class Button extends React.Component {
  render() {
    const { type, text } = this.props;
    return (
      <div>
        <ButtonWithBackground type={type}>
          {text}
        </ButtonWithBackground>
      </div>
    );
  }
}

ButtonWithBackground.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string
} 

export { Button };
