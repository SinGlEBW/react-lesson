import { imagesDAL } from 'src/apiRequests';

const ADD_IMAGE = 'ADD_IMAGE';
const SHOW_IMAGES = 'SHOW_IMAGES';
const DEL_IMAGES = 'DEL_IMAGES';

export const imagesReducer = (stateImages = [], action) => {
  
   switch(action.type){
      case ADD_IMAGE: return [...stateImages].concat(action.images)//не затрагивая stateImages вернём новый stateImages
      case SHOW_IMAGES: return [...action.images]//создаёт новый stateImages
      case DEL_IMAGES: return stateImages.filter((item) => item.id !== Number(action.id))
      default: return stateImages;
    }
}

export const showImagesAC = (images) => ({type: SHOW_IMAGES, images})
export const addImagesAC = (images) => ({type: ADD_IMAGE, images})
export const delImagesAC = (id) => ({type: DEL_IMAGES, id})

export const showImagesT = () => (dispatch) =>{
   imagesDAL.show()
   .then(({ data }) => {
      console.dir(data);
      dispatch(showImagesAC(data.files))
   })
   .catch(console.error);
}
export const addImagesT = (files) => (dispatch) =>{
   imagesDAL.add(files)
   .then(({ data }) => (data.files) ? dispatch(addImagesAC(data.files)) : console.dir(data))
   .catch(console.dir)
}
export const delImagesT = (id) => (dispatch) =>{
   imagesDAL.del(id)
   .then(({ data }) => dispatch(delImagesAC(id)))
   .catch(console.error);
}


/*
Обычный массив [0: {}] принимает форму объекта с ключами индекса {"0", {}}
   Изначально stateImages пустой, заполняем данными возвращаемый объект, который передаётся
   через как я понимаю в stateImages
   Не забывать преобразовывать типы иначе не не ботает === 
*/