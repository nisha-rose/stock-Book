import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { initStore } from './Stores/Store';
import Home from './Components/Home/Home';
import LoginForm from "./Components/Login/LoginForm";


const store = initStore();

class App extends React.Component {
  render() {
    return ( 
      <Provider store={store}>
        <BrowserRouter>
            <React.Fragment>
                <Route path='/' component={LoginForm} exact />
                <Route path='/home' component={Home} />
                {/* <Route path='/productDetails/:id' component={ProductDetails} /> */}
            </React.Fragment>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
