import Axios from 'axios';

let instance = Axios.create({
  baseURL: 'http://localhost:4000/app'
})

export const imagesDAL = {
  show: () => instance.post('images-show'),
  del: (id) => instance.delete(`images-delete/${id}`),
  add: (files) => instance.post('images-add', files)
}
/*
  В params можно отправлять как через url так и в config params
*/
         