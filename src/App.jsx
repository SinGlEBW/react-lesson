import React, { Component } from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import "./App.css";

import Header from "./component/Header/Header";

import Home from "./component/Content/Home/Home";
import Products from './component/Content/Products/Products';
import Chat from './component/Content/Chat/Chat';
import Contact from './component/Content/Contact/Contact';
import Info from './component/Content/Information/Info';
import Images from './component/Content/Images/Images';

import Footer from "./component/Footer/footer";


class App extends Component {
  
  render(){
    
    return (
      <BrowserRouter>
      
          <Header />
          {/* *****Content****** */}
          <Switch>
            <Route exact path='/' render={(props) => <Home home={this.props.home} {...props}/>}/>
           
            <Route path='/products' render={(props) => <Products products={this.props.products} {...props} />}/>
            
            <Route path='/chat' render={(props) => <Chat chat={this.props.chat} {...props} />} />
          
            <Route path='/contact' render={(props) => <Contact contact={this.props.contact} {...props} />}/>
            
            <Route path='/info' render={(props) => <Info info={this.props.info} {...props} />}/>
            
            <Route path='/images' render={(props) => <Images images={this.props.images} {...props} />}/>
            
          </Switch>
           {/* ------------------------------------------------*/}
          
          <Footer email="sbw@mail.ru" tel="417555" /> 
        
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