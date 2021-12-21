import './App.css';
import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <React.StrictMode>
          <Header />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={ShopPage} />
          </Switch>
        </React.StrictMode>
      </BrowserRouter>
    </div>
  );
}

export default App;
