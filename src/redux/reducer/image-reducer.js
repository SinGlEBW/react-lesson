const ADD_IMAGE = 'ADD_IMAGE';
const SHOW_IMAGES = 'SHOW_IMAGES';

let images = {
       animal: [
         { id: 1, src: "/image/18.jpg", alt: "бобр1" },
         { id: 2, src: "/image/19.jpg", alt: "бобр2" },
         { id: 3, src: "/image/20.jpg", alt: "бобр3" },
       ],
};

export const imagesReducer = (stateImages = images, action) => {
   
   switch(action.type){
      case ADD_IMAGE: return {...stateImages, ...action.image} 
      case SHOW_IMAGES: return {...stateImages, ...action.images}
      default: return stateImages; 
      
    }
}

export const addImagesAction = (text) => ({type: ADD_IMAGE, text})
export const showImagesAction = (images) => ({type: SHOW_IMAGES, images})