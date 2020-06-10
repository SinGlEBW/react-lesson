import React, { Component } from 'react';
import './info.css';

export default class Info extends Component{

   render = () => {
         return(
            <section className="info">
               <div className="container">
                  <div className="info__items">
                     <p className="info__item">Какая-то информация 1</p>
                     <p className="info__item">Какая-то информация 2</p>
                  </div>
               </div>
            </section>
         )
   }
}