import Images from './Images';
import { connect } from 'react-redux';
import { showImagesAction, addImagesAction } from 'src/redux/reducer/image-reducer';


let mapStateToProps = (state) => ({images: state.images});

let mapDispatchToProps = (dispatch) => {
   let addImage = (dataImage) => {
      dispatch(addImagesAction(dataImage))
   }
   
   let showImages = (dataImages) => {
      dispatch(showImagesAction(dataImages))
   }

   return {addImage,showImages}
}

let ImagesContainer = connect(mapStateToProps, mapDispatchToProps)(Images);

export default ImagesContainer 





