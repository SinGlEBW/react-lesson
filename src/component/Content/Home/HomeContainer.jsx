import Home from './Home';
import { connect } from 'react-redux';

const f1 = (store) => {
   return {home: store.home}
}
const f2 = (dispatch) => {
   return {}
}

const HomeContainer = connect(f1)(Home)

export default HomeContainer;

/*
Данные распространяются только на jsx 
stateContext.Consumer>   
   {(props) => (<Home {...props}/>)}
</stateContext.Consumer>

Вынести данные за пределы метода render. Это передать данные экземпляра createContext в специальное свойство класса contextType
static contextType = stateContext

Есть вариант с react-redux создать контейнер для презентационной компоненты

*/
