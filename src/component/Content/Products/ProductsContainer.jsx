import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showProdAC, addProdAC, setMenuAC } from '../../../redux/reducer/Content/products-reducer';
import Products from './Products';
import { NavLink } from 'react-router-dom';
import { Menu } from './Menu/Menu';
import Axios from 'axios';

class ProductsContainer extends Component {

   showProducts = () => this.props.products.phone.map((item) => {
      
      return (
         <NavLink className="products__item" key={item.id} to={`/catalog/phone/${item.name}`}>
            <span className="products__item-title">{item.name}</span>
            <img className="products__item-image" src={item.src} alt={item.name} />
         </NavLink>
      )
   })

   menuList = () => this.props.products.menu.map((item) => {
      
      return <Menu product={item} key={item.id} />
   })
   componentDidMount = () => {

   }
   ajaxRequest = (e) => {
      e.preventDefault();
      Axios.get('http://127.0.0.1:4000/catalog')
         .then(response => console.dir(response.data))

         .catch(() => console.log("Какая-то ошибка"));
      // let body = new FormData(e.target);
      // Axios.get('http://127.0.0.1:4000/catalog/?name=')

   }
   render = () => {
      
      return <Products menuList={this.menuList} 
                       showProducts={this.showProducts}
                       ajaxRequest={this.ajaxRequest}
            />//странно не передаётся {...this.методы класса}
   }
}


let mapStateToProps = (state) => ({ products: state.products })

export default connect(mapStateToProps, {
   showProdAC,
   addProdAC,
   setMenuAC
})(ProductsContainer)

/*
   
*/
/*
   В App мы передавали через props state и отдельно метод dispatch, выглядело это так
  <ProductsContainer product={this.props.products} dispatch={this.props.dispatch}/>
  далее наблюдали в ProductsContainer этот объект и метод

  если использовать подход создания контейнера через react-redux ничего не передавая в App
  и так же ничего не передавая в первый вызов connect, презентационной
  компоненте автоматом в props получаем dispatch, но это потому что в 1м вызове connect
  не передано 2м параметром функции отвечающей за dispatch которая должна возвращать объект
  передавая 3й же параметр первого вызова connect это функция которая имеет доступ к первым двум объектам
  и может формировать свой объект передавая в props презентационной компоненте
  Пример:
  let f3 = (a, b) => {//хранятся объекты первого и второго метода и пустой объект

   return { ...a, ...b }
}


Детерминированность(Идемпотентность) - это означает что любое действие алгоритма должно быть строго не двусмысленно
*/