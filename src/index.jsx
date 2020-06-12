import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import stateData from './redux/state';




 ReactDOM.render(
    <React.StrictMode>
    <App  home={stateData.home} 
          products={stateData.products}
          chat={stateData.chat}
          contact={stateData.contact}
          info={stateData.info}
          images={stateData.images}    
    />
    </React.StrictMode>,
    document.getElementById('root')
  );


serviceWorker.unregister();
