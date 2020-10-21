// default import
import React from 'react';
import { render } from 'react-dom';

// named import
import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';
import { Color } from './models/colors';
import { Car } from './models/cars';

const colorList: Color[] = [
  {id:1, name:'blue', hexcode: "000FFF"},
  {id:2, name:'purple', hexcode: "000FFF"},
  {id:3, name:'teal', hexcode: "000FFF"},
  {id:4, name:'aqua', hexcode: "000FFF"},
];

const carList: Car[] = [
  {id:5, make:'Nissan', model:'Maxima', year:2004, color:'blue', price:'$3,000'},
  {id:6, make:'Honda', model:'CR-V', year:2017, color:'blue', price:'$30,000'},
];

render(
  //-custom component, to reference the componenet we pass in the
  // function object r the class reference
  //-"HelloWorld" is not being invoked here, the reference to the "HelloWorld"
  // function is being passed in
  //- always start with an uppercase letter
  <>
    <ColorTool colors={colorList}/>
    <CarTool cars={carList}/>
  </>,
  document.querySelector('#root'),
);
