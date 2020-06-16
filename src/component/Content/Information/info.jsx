import React, { Component } from 'react';
import './Info.css';
import Routing from './Routing/Routing';

export default class Info extends Component{

   constructor(props){
      super(props)
      this.state = {
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

   listInfo = () => {
     return this.props.info.text.map((value) => <li className='info__listItem'>{value}</li>  )
   }
   render() {
      
      
      return (
         <main className='info'>
            <div className='container'>
               <form className='info__form'>
                  <h1 className='info__formItem time'>{this.state.date}</h1>
               </form>
               <ul className="info__list">
                  {this.listInfo()}
               </ul>
               <Routing />
            </div>
         </main>
      )
   }
}
