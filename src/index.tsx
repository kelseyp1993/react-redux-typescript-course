// default import
import React from 'react';
import ReactDOM from 'react-dom';

// named import
import { HelloWorld as HelloWorld2} from './components/HelloWorld';

ReactDOM.render(
  //-custom component, to reference the componenet we pass in the
  // function object r the class reference
  //-"HelloWorld" is not being invoked here, the reference to the "HelloWorld"
  // function is being passed in
  //- always start with an uppercase letter
  <HelloWorld2 />,
  document.querySelector('#root'),
);
