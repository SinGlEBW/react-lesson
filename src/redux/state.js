import arrTexts from './text'

let arrImage = [
   {id: 1, src: "./../../image/18.jpg", alt: "бобр1"},
   {id: 2, src: "./../../image/19.jpg", alt: "бобр2"},
   {id: 3, src: "./../../image/20.jpg", alt: "бобр3"}
];

let stateData = {
   home: {
      arrTexts: arrTexts
   },
   products: {
      phone: [{id: 1, name: 'Huawei'},{id: 2, name: 'Honor'},{id: 3, name: 'Xiaomi'}]
   },
   chat: {
      message: ['Hello'],
     async send({target},message) {
         //let message = document.getElementById('message');//так в React не используют т.к. отрисовку DOM нужно контролировать  
         let valueTextarea = this.refTextarea.current.value;
        await this.props.chat.message.push(valueTextarea)
         let gg = await this.refBoxMessage.current.scrollHeight - this.refBoxMessage.current.scrollTop;
        
         console.dir(gg);
          console.dir(this.refBoxMessage.current);
          console.dir(this.refLi.current);
         
         this.setState({})
         this.refTextarea.current.value = ''
      }
   },
   contact: {
      tel: ['8(800)300-05-00', '417-555']
   },
   info: {
      text: ['Информация 1', 'Информация 2', 'Информация 3']
   },
   images: {
      animal: arrImage,
      add: (ev,image) => {
         ev.preventDefault();
         

         console.dir(ev);
        
         // this.animal.push(image)
         // this.setState({})
      }
   }
}

export default stateData