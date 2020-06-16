import React, { Component } from 'react';
import './Images.css';

export default class Images extends Component {

   response = () => {
      return this.props.images.animal.map((objImage) => {
         return <img key={objImage.id} className='image__item' src={objImage.src} alt={objImage.alt}/>
      })
   }
   render = () => {
      console.dir(this);
      return(
         
         <div className="image">
            <div className="container">
               <div className="image__items">
                  {this.response()}
                  <form method='POST' >
                     <input type="file" name="image"/>
                     <input type="submit" name="sub" onClick={this.props.images.add}/>
                  </form>
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

