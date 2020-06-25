import React, { Component } from 'react';

import Contact from './Contact';

export default class ContactContainer extends Component {
   render = () => {
console.dir(this);
      return (
         <Contact {...this.props}/>
      )
   }
};

