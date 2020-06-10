import React, { Component } from 'react';
import './list.css';

export default class List extends Component {
   
   render = () => {
      console.dir(this);
      let li = this.props.arrItem.map((item, index) => <li key={index} className="list__item">{item}</li>)
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
