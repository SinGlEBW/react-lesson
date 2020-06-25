import { combineReducers, createStore } from 'redux';
import { chatReducer } from './reducer/chat-reducer';
import { contactReducer } from './reducer/contacts-reducer';
import { contentReducer } from './reducer/home-reducer';
import { imagesReducer } from './reducer/image-reducer';
import { infoReducer } from './reducer/info-reducer';
import { productReducer } from './reducer/products-reducer';

const reducers = combineReducers({
   home: contentReducer,
   products: productReducer,
   chat: chatReducer,
   info: infoReducer,
   contact: contactReducer,
   images: imagesReducer,
})
const storeRedux = createStore(reducers);

export { storeRedux };

