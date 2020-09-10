import Axios from 'axios';

let instance = Axios.create({
  baseURL: 'http://localhost:4000/app',
  
})

export const imagesDAL = {
  show: () => instance.get('show-img'),
  add: (files) => instance.post('add-img', files),
  del: (id) => instance.delete(`del-img/${id}`),
}
export const userDAL = {
  register: (data) => instance.post('register', data),
  entrance: (data) => instance.post('login', data),
  logOut: () => instance.get('logOut', {headers: {'Authorization': JSON.parse(localStorage.getItem('token')) || ''}}),
  refresh: (refreshToken) => instance.post('refresh', { refreshToken }, {headers: {'Authorization': JSON.parse(localStorage.getItem('token')) || ''}})
}
export const chatDAL = {
  show: () => instance.get('chat/show-message'),
  add: (message) => instance.post('chat/add-message', message),
  del: (id) => instance.delete('chat/chat/del-message/' + id),
}



/*
  В params можно отправлять как через url так и в config params
*/
         