import arrTexts from './text'

let arrImage;

let stateData = {
   home: {
      arrTexts: arrTexts
   },
   products: {
      phone: [{id: 1, name: 'Huawei'},{id: 2, name: 'Honor'},{id: 3, name: 'Xiaomi'}]
   },
   chat: {
      message: ['Hello']
   },
   contact: {
      tel: ['8(800)300-05-00', '417-555']
   },
   info: {
      text: ['Информация 1', 'Информация 2', 'Информация 3']
   },
   images: {
      moto: arrImage
   }
}

export default stateData