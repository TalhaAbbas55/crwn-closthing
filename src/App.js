import './App.css';
import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import { Route, Routes, BrowserRouter, Switch } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1></div>
)

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop/hats" component={HatsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
