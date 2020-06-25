import React, { Component } from 'react';
import Home from './Home';
import { stateContext } from '../../../stateContext';

export default class HomeContainer extends Component {
   render = () => {
      
      return (
         <stateContext.Consumer>
            {/* Взял данные контекстом, не прокидывая через props */}
            {(props,a) => {
               console.dir(props);
            return(<Home {...props}/>)}}
         </stateContext.Consumer>
      
      )
   }
};

