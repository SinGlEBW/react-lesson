import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { storeRedux } from './redux/reduxStore';
// eslint-disable-next-line
import { stateContext, objectState } from './stateContext';
import { Provider } from 'react-redux';



// let reloadDOMfileIndex = (storeData) => {

//    objectState.state = storeData.getState();//3 вариант

   ReactDOM.render(
      <React.StrictMode>
            <Provider store={storeRedux}>{/* Вариант 4 */}
               <App  />
            </Provider>
      </React.StrictMode>,
      document.getElementById('root')
   );

// }
// let reloadDOM = reloadDOMfileIndex.bind(null, storeRedux);
// storeRedux.subscribe(reloadDOM);
// reloadDOMfileIndex(storeRedux);


serviceWorker.unregister();



/*
   Ставить index ниже state ничего не выйдет, последним обновляется тот файл в котором есть ReactDOM.render.
   Что бы вызвать тут функцию то нужно передать данные которой ей требуются, а это требует делать state ниже index
*/
/*
   Изначально строим import снизу вверх.
*/

/*
Передача контекста
<App dispatch={storeData.dispatch} {...storeData.getState()} />Вариант 1 
2й Вариант через React
<stateContext.Provider value={{...stateData.getState(), dispatch: stateData.dispatch}} >

3й Вариант передать в свой объект.
objectState.state = storeData.getState();

4й Вариант через React-Redux
<Provider store={только целый объект с dispatch и т.д}
*/