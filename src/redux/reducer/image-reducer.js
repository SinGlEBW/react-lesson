const ADD_IMAGE = 'ADD_IMAGE';

let images = {
       animal: [
         { id: 1, src: "/image/18.jpg", alt: "бобр1" },
         { id: 2, src: "/image/19.jpg", alt: "бобр2" },
         { id: 3, src: "/image/20.jpg", alt: "бобр3" },
       ],
};

export const imagesReducer = (stateImages = images, action) => {
   
   switch(action.type){
      case ADD_IMAGE: stateImages.setText = action.text; return stateImages;
      
      default: return stateImages; 
      
    }
}

export const inImagesAction = (text) => ({type: ADD_IMAGE, text})