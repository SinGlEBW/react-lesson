import React, { Component } from 'react';
import './Images.css';
import Axios from 'axios';

export default class Images extends Component {

   response = () => {
      return this.props.images.animal.map((objImage) => {
         return <img key={objImage.id} className='image__item' src={objImage.src} alt={objImage.alt}/>
      })
   }  
   componentDidMount = () => {
      Axios.post('http://localhost:4000/app/images-show')
      .then((data) => (console.dir(data),this.props.showImages(data)))
      .catch((err) => console.dir(err));  
   }
   evAddImages = (e) => {
      e.preventDefault();
      console.dir(e.target[0].files[0]);
      fetch('http://localhost:4000/app/images-add', {
         method: 'POST',
         // headers: {'Content-Type': 'application/json'},
         body: new FormData(e.target),
         mode: 'no-cors'
      })
      .then((data) => data.json())
      .then((image) => console.dir(image))
      .catch((err) => console.dir(err))
      
      
   }
   render = () => {
console.dir(this);
      return(
         
         <main className="image">
            <div className="container">                           
               <div className="image__items">
                  {this.response()}
                  <form onSubmit={this.evAddImages}>
                     <input type="file" name="images" multiple/>
                     <input type="submit" name="sub"/>
                  </form>
               </div>
            </div>
         </main>   
      )
   }
};

/*
   них.ясебе загадка оказывается src автоматом находиться в папке public.
   Можно закинуть туда папку image и установить путь "image/18.jpg"
*/

