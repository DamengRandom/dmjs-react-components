import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const CommonButtonStyle = styled.button`
  font-size: 12pt;
  outline: none;
  border: none;
  padding: 6pt 12pt;
  cursor: pointer;
`;

const PrimaryButton = styled(CommonButtonStyle)`
  background-color: white;
  color: #00a7f8;
  border: 1px solid #00a7f8;
`;

const SecondaryButton = styled(CommonButtonStyle)`
  background-color: #00a7f8;
  color: white;
  border: 1px solid #00a7f8;
`;

const DangerButton = styled(CommonButtonStyle)`
  background-color: #db2938;
  color: white;
  border: 1px solid #db2938;
`;

const handleRenderButton = (type, text, pattern) => {
  switch(pattern) {
    case 'primary':
      return <PrimaryButton type={type}>{text}</PrimaryButton>;
    case 'secondary':
      return <SecondaryButton type={type}>{text}</SecondaryButton>;
    case 'danger':
      return <DangerButton type={type}>{text}</DangerButton>;
    default:
      return <PrimaryButton type={type}>{text}</PrimaryButton>;
  }
}

const Button = (props) => {
  const { type, text, pattern } = props;
  return (
    <React.Fragment>
      {handleRenderButton(type, text, pattern)}
    </React.Fragment>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  pattern: PropTypes.string
} 

export { Button };
