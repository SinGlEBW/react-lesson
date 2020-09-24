import Axios from 'axios';

let instance = Axios.create({
  baseURL: 'http://localhost:4000/app',
  //withCredentials: true,
  
})

export const imagesDAL = {
  show: () => instance.get('show-img'),
  add: (files) => instance.post('add-img', files),
  del: (id) => instance.delete(`del-img/${id}`),
}
export const userDAL = {
  register: (data) => instance.post('register', data),
  entrance: (data) => instance.post('login', data),
  logOut: (refreshToken) => instance.post('logout', { refreshToken }),
  refresh: (refreshToken) => instance.post('refresh', { refreshToken }, {headers: {'Authorization': JSON.parse(localStorage.getItem('token')) || ''}})
}
export const chatDAL = {
  show: () => instance.get('chat/show-message'),
  add: (message) => instance.post('chat/add-message', message),
  del: (id) => instance.delete('chat/chat/del-message/' + id),
}



/*
  В params можно отправлять как через url так и в config params
  params считается URI параметром т.к. мы передаём как часть URL за которой нужно следить на backEnd.
  URI он жёстко привязывается к своему месту /user/3/5. Это значит мы на бэк мы ждём параметр user/:id1/:id2

  query параметр это обычный параметр передаваемый через ? aaa=bbb&cc=dd и без разницы можно так cc=dd&aaa=ddd 

  GET DELETE могут только передавать через URL

  POST PUT имеют так же тело запроса
*/
         