import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
// import stateData , { reloadState } from './redux/state';
import * as serviceWorker from './serviceWorker';



export function reloadDOMfileIndex(stateData){

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
 
}

// reloadState(reloadDOMfileIndex);




serviceWorker.unregister();
