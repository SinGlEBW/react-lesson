import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import stateData,{reloadState} from './redux/state';
import * as serviceWorker from './serviceWorker';


function reloadDOMfileIndex (stateData){
  
   //  console.dir(props);
   
}
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


reloadState(reloadDOMfileIndex);//передаём функцию в state


serviceWorker.unregister();


/*
   Ставить index ниже state ничего не выйдет, последним обновляется тот файл в котором есть ReactDOM.render.
   Что бы вызвать тут функцию то нужно передать данные которой ей требуются, а это требует делать state ниже index


*/
