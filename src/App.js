import { BrowserRouter, Route } from 'react-router-dom';
import ListePays from './containers/ListePays';
import Header from './components/header';
import React, { Component} from 'react';

class App extends Component {
 
  render () {
  return (
      <div className="container">
          <BrowserRouter>
              <div>
                  <Header />
                  <Route exact path="/" component={ListePays} />
              </div>
          </BrowserRouter>
      </div>
  )
}
}



export default App;
