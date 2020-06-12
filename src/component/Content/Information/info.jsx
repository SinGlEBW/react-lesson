import React, { Component } from 'react';
import './Info.css';
import Routing from './Routing/Routing';

export default class Info extends Component{

   constructor(props){
      super(props)
      this.checkEv = this.checkEvent.bind(this)
      this.state = {
         check: localStorage.getItem('checked') || false,
         date: new Date().toLocaleTimeString()//влияет только на первоначальную загрузку страницы
      }  
   }
   componentDidMount() {//запускается как отрендерится. типa события windows.onload
      this.timerID = setInterval(()=>this.tick(),1000) 
   }
   componentWillUnmount() {
      clearInterval(this.timerID);
   }
   tick() {
      this.setState({
        date: new Date().toLocaleTimeString()
      });
    }

   checkEvent ({target}) {//такой способ checkEvent = () => {} создания метода не теряет this
      this.setState({})
      localStorage.setItem('checked', target.checked)
   }
   render() {
      let check = JSON.parse(localStorage.getItem('checked'))
      
      return (
         <main className='info'>
            <div className='container'>
               <form className='info__form'>
                  <input className='info__formItem' onChange={this.checkEv} defaultChecked={check} type="checkbox"/>
                  <div className='info__formItem'>{check ? 'выбран' : 'не выбран'}</div> 
                  <h1>{this.state.date}</h1>
                 
               </form>
               <Routing />
            </div>
         </main>
      )
   }
}