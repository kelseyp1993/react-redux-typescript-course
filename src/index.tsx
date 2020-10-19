// default import
import React from 'react';
import ReactDOM from 'react-dom';

// named import
import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

ReactDOM.render(
  //-custom component, to reference the componenet we pass in the
  // function object r the class reference
  //-"HelloWorld" is not being invoked here, the reference to the "HelloWorld"
  // function is being passed in
  //- always start with an uppercase letter
  <>
    <ColorTool />
    <CarTool />
  </>,
  document.querySelector('#root'),
);
