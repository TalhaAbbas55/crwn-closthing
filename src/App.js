import './App.css';
import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import signInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './components/firebase/firebase.util';




class App extends React.Component {
  state = {
    currentUser: null,
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        });
      } else {
        this.setState({
          currentUser: userAuth
        })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <React.StrictMode>
            <Header currentUser={this.state.currentUser} />
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/shop" component={ShopPage} />
              <Route path="/signin" component={signInAndSignUpPage} />
            </Switch>
          </React.StrictMode>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
