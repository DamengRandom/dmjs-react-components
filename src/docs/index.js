import React from 'react';
import ReactDOM from 'react-dom';
// lib components
import { Button } from '../lib/Button';

const App = () => {
  return (
    <div>
      <h1>(NavBar)DMJS Demo(s)</h1>
      <Button type="text" text="Hi Damon" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
