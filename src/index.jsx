import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { storeRedux } from './redux/reduxStore';
import { stateContext } from './stateContext';

import  { reloadState } from './redux/state';
import { store } from './redux/storeForFunction';


let reloadDOMfileIndex = (stateData) => {
   
   console.dir(stateData);
   ReactDOM.render(
      <React.StrictMode>
         <stateContext.Provider value={{...stateData.getState(), dispatch: stateData.dispatch}} >
         <App dispatch={stateData.dispatch} {...stateData.getState()} />
      </stateContext.Provider>
      </React.StrictMode>,
      document.getElementById('root')
   );
    
}
let reloadDOM = reloadDOMfileIndex.bind(null, storeRedux);
storeRedux.subscribe(reloadDOM);
reloadDOMfileIndex(storeRedux);


serviceWorker.unregister();





//1//reloadState(reloadDOMfileIndex);//передаём функцию в state
//store.subscribe(reloadDOMfileIndex)//subscribe
/*
   Ставить index ниже state ничего не выйдет, последним обновляется тот файл в котором есть ReactDOM.render.
   Что бы вызвать тут функцию то нужно передать данные которой ей требуются, а это требует делать state ниже index
*/
