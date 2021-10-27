import { BrowserRouter, Route } from 'react-router-dom';
import ListePays from './containers/ListePays';
import Header from './components/header';
import UnPays from './components/unpays';
import React, { Component} from 'react';

class App extends Component {
 
  render () {
  return (
      
      <div >
          <BrowserRouter>
              <Header />
              <div className="container">
                  <Route exact path="/" component={ListePays} />
                  <Route path="/pays/:code" component={UnPays}  />
                  
              </div>
          </BrowserRouter>
      </div>
  )
}
}



export default App;
