// import React, { Component } from 'react';
import { connect } from 'react-redux';
import { inProductsAction, showProductsAction, setProductMenu } from '../../../redux/reducer/products-reducer';
import Products from './Products';

let f1 = (store) => {//хранится store и пустой объект
   return { products: store.products }
}
let f2 = (dispatch) => {//хранится dispatch и пустой объект
   let productionAdd = (phone) => {
      dispatch(inProductsAction(phone))
   }
   let showProducts = (phone) => {
      dispatch(showProductsAction(phone))
   }
   let setMenu = (name, data) => {
      dispatch(setProductMenu(name, data))
   }
   return { 
      productionAdd,
      showProducts,
      setMenu
   }
}
let ProductsContainer = connect(f1, f2)(Products)


export default ProductsContainer


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