import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'
import './App.css';


const HatsPage = () => (
  <div>
    <h1>HatsPage</h1>
  </div>
)
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop/hats' component={HatsPage} />

        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
