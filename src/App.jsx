import React, { Component } from "react";
import "./css/App.css";
import Header from "./component/header";
import Footer from "./component/footer";
import Test from "./component/form-test";
import LifeState from './component/state';
import {text1, text2, text3} from './text'
import Radio from './component/radio';

class App extends Component {

  render(){
    return (
      <div className="App">
        <Header />
        <Test textTest={[text1, text2, text3]}/>
        <LifeState/>
        <Footer email="sbw@mail.ru" tel="417555" />
      </div>
    );
  }
 
}

export default App;
