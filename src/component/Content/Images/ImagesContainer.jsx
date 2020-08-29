import React, { Component, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { delImagesT, addImagesT, showImagesT } from 'src/redux/reducer/Content/image-reducer';
import Axios from 'axios';
import Preloader from 'src/component/Preloader';


let Images = lazy(() => import('./Images'));


class ImagesContainer extends Component {
   ext = ['.jpg', '.jpeg', '.bmp', '.png'];

   allImages = () => (
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
      this.props.showImagesT()
   }

   componentDidUpdate = (prevProps, prevState, snapshot) => {

   }

   add = (e) => {
      e.preventDefault();
      let files = new FormData(e.target);

      try {
         for (let item of files.values()) {
            if (!this.ext.some((ex) => item.name.endsWith(ex))) {
               throw new Error(this.ext.join(' '));
            }
         }
         this.props.addImagesT(files)

      } catch (err) {
         console.dir(`Принимаются только расширения: ${err.message}`);
      }
   }

   delete = (e) => { 
      e.preventDefault();
      this.props.delImagesT(e.target.parentElement.id)
   }

   render = () => (
      <Suspense fallback={<Preloader id='pageLoading'/>}>
         <Images add={this.add} allImages={this.allImages} />
      </Suspense>
   )
};

let mapStateToProps = (state) => ({ images: state.images });

//для наглядности. Ключи это не action, это функция которая свяжется с dispatch 
export default connect(mapStateToProps, {
   showImagesT,
   addImagesT,
   delImagesT
})(ImagesContainer); 

/*
Старый способ dispatch
let mapDispatchToProps = (dispatch) => {

   let showImages = (id) => {
      return dispatch(showImagesAC(id))
   }

   return {
      showImages
   }
}
*/