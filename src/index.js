import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'

import reducers from './reducers';
import App from './components/App';



// create compose enhancer for the redux dev tool wiring
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// create a store variable and create the store in it

const store = createStore(reducers,
  // this is for applying middlewares used in our app
  composeEnhancers(applyMiddleware(reduxThunk))
  );

// import './index.css';



ReactDom.render(<Provider store={store}>   
  <App/>   
  </Provider>,  
  document.getElementById('root')
);

