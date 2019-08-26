import React from 'react';

import './spinner.sass';

const Spinner = (): JSX.Element => {
  const compStyle = {
    width: '100%',
    height: '100%',
  };
  return (
    <div className="lds-css ng-scope">
      <div className="lds-spinner" style={compStyle}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Spinner;
