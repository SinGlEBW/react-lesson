import React, { Component } from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import "./App.css";
import arrayTexts from './component/Content/Home/Tests/text'

import Header from "./component/Header/header";
import Footer from "./component/Footer/footer";
import Test from "./component/Content/Home/Tests/tests";
import LifeState from './component/Content/state';
import Radio from './component/Content/Home/radio';
import Button from './component/Content/Images/Control/button';
import Info from './component/Content/Information/info';
import List from './component/Content/Products/list';
import Routing from './component/Content/Information/Routing/routing';



class App extends Component {
  
  render(){
   
    return (
      <BrowserRouter>
      
        <div className="App">
          <Header />
          {/* *****Content****** */}
          <Route path='/:admin?' component={(props) => <Test textTest={arrayTexts} {...props}/>}/>
          <Route path='/' component={Radio}/>

          <Route path='/products' component={LifeState}/>



          <Route path='/contact' component={(props) => <List arrItem={[14,15,16]} {...props} />} />

          <Route exact path='/info' component={Info}/>{/* exact наблюдает за точностью пути. */}
          <Route path='/info' component={Routing}/>
          <Switch>
          </Switch>
          
          
           
           {/* ------------------------------------------------*/}

          <Footer email="sbw@mail.ru" tel="417555" /> 
        </div>
       
      </BrowserRouter>
    );
  }
 
}

export default App;


/*
  Условный рендеринг. Подразумевает собой что при определённом условии будет отображён отображаться один из компонентов
  Строиться условие в компоненте который контролирует вывод других компонентов.
  Предположим что требуется при нажатии отображать какой-то компонент. 
  1й Вариант. 
  Можно использовать event в одном компоненте создав нужные в нём кнопки и повесить эти события,
  далее с изменением события подключать компонент в нужный нам участок
  2й Вариант.
  Изначально мы знаем что props и state родительского компонента, можно передавать внутрь дочерних, но не
  наоборот. Определяем компонент в котором будет регулироваться отображение других компонентов. Что бы
  не строить html код в том месте где он нам не нужен мы может отдельно сделать компонент кнопок
  и его подключить. Далее нам понадобиться передать через атрибуты методы которые мы хотели бы использовать
  на событии клика, для изменения setState родителя. В разделе кнопок мы получим их через props и завяжем на событие
  Изменение на дочернем элементе повлечёт изменение на родителе, в котором то мы и будем изменять доступ 
  к другим компонентам 
  Почти всегда из 2х функций противоположного друг другу действия, можно сделать одну функцию

  Можно так реализовывать 
  {(this.state.checked) ? <Info check={true}/> : <Info check={false}/>} построив логику в info
  показать один текст или другой, а можно разные компоненты передавать

  Switch требуется для включения определения параметров в url
  
*/