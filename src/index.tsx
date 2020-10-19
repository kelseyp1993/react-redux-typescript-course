import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld() {
  // intrinsic element, with ReactDOM, the HTML tags are all intrinsic
  // reference the intrensic element using a string-based tag name
  // JSX - starts with lower case letter
  return React.createElement('h1', null, 'Hello, World!');
}

ReactDOM.render(
  //-custom component, to reference the componenet we pass in the
  // function object r the class reference
  //-"HelloWorld" is not being invoked here, the reference to the "HelloWorld"
  // function is being passed in
  //- always start with an uppercase
  React.createElement(HelloWorld),
  document.querySelector('#root'),
);
