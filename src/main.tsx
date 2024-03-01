import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './Routes'
import { Provider } from 'react-redux'
import store from './store/index';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='font-montserrat'>
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  </React.StrictMode>,
)
