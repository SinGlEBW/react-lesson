import React, { Component } from 'react';
import './List.css';

export default class List extends Component {
   
   render = () => {
     
      let li = this.props.products.phone.map((item) => <li key={item.id} className="list__item">{item.name}</li>)
      
      return (
         <section className="list">
            <div className="container">
               <ul className="list__items">
                  {li}
               </ul>
            </div>
         </section>
      )
   }
};
