import React, { Component } from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import "./App.css";

import Header from "./component/Header/Header";
import HomeContainer from './component/Content/Home/HomeContainer';
import ProductsContainer from './component/Content/Products/ProductsContainer';
import ChatContainer from './component/Content/Chat/ChatContainer';
import ContactContainer from './component/Content/Contact/ContactContainer';
import InfoContainer from './component/Content/Information/InfoContainer';
import ImagesContainer from './component/Content/Images/ImagesContainer';
import Footer from "./component/Footer/footer";



class App extends Component {
  
  render(){
    console.dir(this);
   
    return (
      <BrowserRouter>
      
          <Header />
          {/* *****Content****** */}
          <Switch>
            
            <Route exact path='/' render={(props) => <HomeContainer />}/>{/* Использовал контекст для передачи */}
           
            <Route path='/products' render={(props) => <ProductsContainer products={this.props.products} />}/>
            
            <Route path='/chat' render={(props) => <ChatContainer chat={this.props.chat} dispatch={this.props.dispatch} />} />
          
            <Route path='/contact' render={(props) => <ContactContainer contact={this.props.contact} />}/>
            
            <Route path='/info' render={(props) => <InfoContainer info={this.props.info} />}/>
            
            <Route path='/images' render={(props) => <ImagesContainer images={this.props.images} />}/>
            
          </Switch>
           {/* ------------------------------------------------*/}
          
          <Footer email="sbw@mail.ru" tel="417555" /> 
        
      </BrowserRouter>
    );
  }
 
}

export default App;


/*
  Условный рендеринг. Подразумевает собой что при определённом условии будет отображаться один из компонентов
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

/*
  О Context в React. Все методы и свойства передаются через props сверху вниз. Иногда требуется
  делиться значениями с нижних уровней компонентов к верхним, для этого приходиться 
  передавать callback функции по props и в итоге props зарастает мусором.
  Что бы этого избежать придумали context который оборачивается главный родительский
  компонент после чего имеют доступ к данным другие компоненты напрямую.
  Такой способ на самом деле хранит данные глобально, что не всегда хорошо.
  
Про пропсы. 
Предположим что на верхнем уровне мы имеем кучу методов. Мы будем передавать через пропс таким
образом что бы желательно компоненты получали только те методы которые им не обходимы.
Из-за того что мы имеем цепочку компонентов в компонентах, естественно в этой ситуации будут
компоненты которые просто транзитом будут передавать данные методы на нижний уровень.

Передача через Context не совсем удобна. 
1. Что бы не было циклического подключения нам нужно создать контекст в другом файле и уже его импортировать 
    в файле где ходим взять данные, потом импортировать куда хотим положить данные
2. т.к. MyContext.Provider принимает значения, а MyContext.Consumer компонент в который кладём callback 
   и забираем 1м параметром эти данные, далее возвращаем jsx, но есть одно но.
   Если данные нужны выше метода render, то тут проблема. Так что context хорош если данные нужно 
   передать непосредственно в jsx.  

Кстате при большом желании можно передавать целые компоненты через пропс, а то и объект компонентов
*/