import React from 'react';

const Button = (props) => {
  const {
    buttonclass, value, disabled, handleClick,
  } = props;
  return (<button type="button" className={`page-block page__block_with-border button ${buttonclass}`} disabled={disabled} onClick={handleClick}>{value}</button>);
};
export default Button;
