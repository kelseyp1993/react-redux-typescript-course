// default import
import React from 'react';
import { render } from 'react-dom';

// named import
import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';
import { Color } from './models/colors';

const colorList: Color[] = [
  {id:1, name:'blue'},
  {id:2, name:'purple'},
  {id:3, name:'teal'},
  {id:4, name:'aqua'},
];

render(
  //-custom component, to reference the componenet we pass in the
  // function object r the class reference
  //-"HelloWorld" is not being invoked here, the reference to the "HelloWorld"
  // function is being passed in
  //- always start with an uppercase letter
  <>
    <ColorTool colors={colorList}/>
    <CarTool />
  </>,
  document.querySelector('#root'),
);
