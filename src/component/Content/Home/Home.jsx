import React, { Component } from 'react';

import './Home.css'
import Tests from './Tests/Tests';

// import Radio from './Radio/radio';

export default class Home extends Component {
   render = () => {
console.dir(this);
      return (
       
         <main className="home">
            <Tests {...this.props}/> 
            
         </main>
       
      )
   }
};
