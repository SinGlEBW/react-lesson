import React, { Component } from 'react';
import Products from './Products';

export default class ProductsContainer extends Component{

   render = () => {

      return <Products {...this.props}/>
   }
}