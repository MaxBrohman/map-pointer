import React from 'react';

import './spinner.sass';

const Spinner = (): JSX.Element => {
  return (
    <div className="lds-css ng-scope">
      <div className="lds-spinner">
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
