import './App.css';
import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <React.StrictMode>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop/hats" component={ShopPage} />
          </Switch>
        </React.StrictMode>
      </BrowserRouter>
    </div>
  );
}

export default App;
