import React from 'react';

const StepChanger = ({currentStep, onupdateStep}) => (
<div>
    <b>Current step: {currentStep}</b>
    <button onClick={onupdateStep}>Update step!</button>
  </div>
);

export default StepChanger;
