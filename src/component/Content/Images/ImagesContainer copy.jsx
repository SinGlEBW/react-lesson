import Images from './Images';
import { connect } from 'react-redux';
import { showImagesAction, addImagesAction, delImagesAction } from 'src/redux/reducer/image-reducer';
import Axios from 'axios';

let mapStateToProps = (state) => ({images: state.images});

let mapDispatchToProps = (dispatch) => {

   let addImages = (files, ext) => {
      try {
         for (let item of files.values()) {
           if (!ext.some((ex) => item.name.endsWith(ex))) {
             throw new Error(ext.join(' '));
           }
         }
   
         Axios.post('http://localhost:4000/app/images-add', files)
           .then(({data}) => (data.files) ? dispatch(addImagesAction(data.files)) : console.dir(data))
         
           .catch(console.error)
         
       } catch (err) {
         console.dir(`Принимаются только расширения: ${err.message}`);
       }  
   } 
   let showImages = () => {
      Axios.post('http://localhost:4000/app/images-show')
      .then(({ data }) => dispatch(showImagesAction(data)))//приходит массив объектов
      .catch(console.error);
   }
   let delImages = (id) => {
      Axios.post('http://localhost:4000/app/images-delete', {id})
      .then(({ data }) => dispatch(delImagesAction(id)))
      .catch(console.error);
   }

   return {
      addImages,
      showImages,
      delImages
   }
}

let ImagesContainer = connect(mapStateToProps, mapDispatchToProps)(Images);

export default ImagesContainer 
