import Axios from 'axios';

let instance = Axios.create({
  baseURL: 'http://localhost:4000/app'
})

export const imagesDAL = {
  show: () => instance.get('images-show'),
  add: (files) => instance.post('images-add', files),
  del: (id) => instance.delete(`images-delete/${id}`),
}
export const userDAL = {
  register: (data) => instance.post('register', data),
  entrance: (data) => instance.post('login', data),
}
export const chatDAL = {
  show: () => instance.get('chat/message-show'),
  add: (message) => instance.post('chat/message-add', message),
  del: (id) => instance.delete('chat/chat/message-delete/' + id),
}



/*
  В params можно отправлять как через url так и в config params
*/
         