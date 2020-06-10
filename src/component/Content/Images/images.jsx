import React, { Component } from 'react';
import './images.css';

export default class Images extends Component {
   render = () => {
      console.dir(this);
      return(
         
         <div className="image">
            <div className="container">
               <div className="image__items">
                  
                  <img className="image__item" src="./../../image/18.jpg" alt="бобр1"/>
                  <img className="image__item" src='/../../image/19.jpg' alt="бобр2"/>
                  <img className="image__item" src='/../../image/20.jpg' alt="бобр3"/>
               </div>
            </div>
         </div>   
      )
   }
};

/*
   них.ясебе загадка оказывается src автоматом находиться в папке public.
   Можно закинуть туда папку image и установить путь "image/18.jpg"
*/

