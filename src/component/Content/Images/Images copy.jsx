import React, { Component, Fragment, lazy} from 'react';
import './Images.css';

export default class Images extends Component {
  ext = ['.jpg', '.jpeg', '.bmp', '.png'];

  response = () => (
    
    this.props.images.map((o_Image) => {
      
      return (
        <div className='image__item' key={o_Image.id} id={o_Image.id}>
          <img className='image__picture' src={o_Image.src} alt={o_Image.alt} />
          <button className='image__but' onClick={this.delete}>Удалить</button>
        </div>
      )
    })
  )

  componentDidMount = () => {
    this.props.showImages()
  }
  componentDidUpdate = (prevProps, prevState, snapshot) => {
    
  }
  add = (e) => {
    e.preventDefault();
    let files = new FormData(e.target);
    this.props.addImages(files, this.ext)
  }
  delete = (e) => {
    e.preventDefault();
    this.props.delImages(e.target.parentElement.id)
    
  }
  render = () => {
   
    return (

      <main className="image">
        <div className="container">
          <div className="image__items">
            {this.response()}
            <form onSubmit={this.add}>
              <input type="file" name="images" multiple />
              <input type="submit" name="add" value="Добавить"/>
            </form>
          </div>
        </div>
      </main>
    )
  }
};


/*
   них.я себе загадка оказывается src автоматом находиться в папке public.
   Можно закинуть туда папку image и установить путь "image/18.jpg"
*/

