import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index'

import 'semantic-ui-css/semantic.css'
import 'semantic-ui-css/semantic.js'

import Home from './components/Home'
import Category from './components/Category'

const styles = {
  navbar: {
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    borderTopColor: 'orange',
    backgroundColor: 'rgba(255, 255, 255, 0.96)'
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <nav>
              <div className="ui top secondary fixed menu" style={styles.navbar}>
                <div className="item">
                  <img src="https://png.icons8.com/badger/win10/96" alt="..." />
                </div>
                <div className="item">
                  Hacktiv<b>NewsTime</b>
                </div>
                <div className="right menu">
                  <Link className="item" to="/">Beranda</Link>
                  <Link className="item" to="/category">Category</Link>
                </div>
              </div>
              <Route exact path="/" component={Home} />
              <Route exact path="/category" component={Category} />
            </nav>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
