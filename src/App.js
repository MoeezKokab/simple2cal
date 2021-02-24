import React from 'react';

import * as call from './Cal'
function App() {
  return (
    <ul>
      <li>Sum of 2 number {call.default(1,2)} </li>
      <li>Sub of 2 number{call.sub(1,2)} </li>
      <li>Multy of 2 number {call.mult(1,2)}</li>
    <li>Div of 2 number {call.div(1,2)} </li>
    </ul>
   
  );
}

export default App;
