import { combineReducers, createStore, applyMiddleware } from 'redux';
import { headerReducer } from './reducer/Header/header-reducer';
import { profileReducer } from './reducer/Header/profileReducer';
import { authReducer } from './reducer/Header/auth-reducer';
import { productReducer } from './reducer/Content/products-reducer';
import { chatReducer } from './reducer/Content/chat-reducer';
import { contactReducer } from './reducer/Content/contacts-reducer';
import { homeReducer } from './reducer/Content/home-reducer';
import { imagesReducer } from './reducer/Content/image-reducer';
import { infoReducer } from './reducer/Content/info-reducer';

import { footerReducer } from './reducer/Footer/footer-reducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
   auth: authReducer,
   header: headerReducer,
   profile: profileReducer,
   home: homeReducer,
   products: productReducer,
   chat: chatReducer,
   info: infoReducer,
   contact: contactReducer,
   images: imagesReducer,
   footer: footerReducer,
   
})
const reduxStore = createStore(reducers, applyMiddleware(thunk));

window.state = reduxStore;
export { reduxStore };

