import React from 'react';
import './Images.css';

let Images = (props) => {

  return (

    <main className="image">
      <div className="container">
        <div className="image__items">
          {props.allImages()}
          <form onSubmit={props.add}>
            <input type="file" name="images" multiple accept="image/jpg"/>
            <input type="submit" value="Добавить"/>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Images;
   



/*
   них.я себе загадка оказывается src автоматом находиться в папке public.
   Можно закинуть туда папку image и установить путь "image/18.jpg"
*/

