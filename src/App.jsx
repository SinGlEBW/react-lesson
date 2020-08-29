import React, { Component } from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import "./App.css";

import HeaderContainer from './component/Header/HeaderContainer';
import HomeContainer from './component/Content/Home/HomeContainer';
import ProductsContainer from './component/Content/Products/ProductsContainer';
import ChatContainer from './component/Content/Chat/ChatContainer';
import ContactContainer from './component/Content/Contact/ContactContainer';
import InfoContainer from './component/Content/Information/InfoContainer';
import ImagesContainer from './component/Content/Images/ImagesContainer';
import Footer from "./component/Footer/footer";

class App extends Component {
  home = {
		pathname: '/' || '/registration'
	}
  render(){
    
    return (
      <BrowserRouter>
     
         <HeaderContainer />
          
            {/* *****Content****** */}
            <Route exact path='/' render={(props) => <HomeContainer />}/>{/* Использовал контекст для передачи */}
           
            <Route path='/catalog' render={(props) => <ProductsContainer />}/>
            
            <Route path='/chat' render={(props) => <ChatContainer {...props}/>} />
    
            <Route path='/contacts' render={(props) => <ContactContainer {...props}/>}/>
            
            <Route path='/info' render={(props) => <InfoContainer {...props}/>}/>
         
            <Route path='/images' render={(props) => <ImagesContainer {...props}/>}/>
         
           {/* ------------------------------------------------*/}
           
          <Footer email="sbw@mail.ru" tel="417555" /> 
        
      </BrowserRouter>
    );
  }
 
}

export default App
/*
Домен - http://localhost:3000
Путь - Это всё что с доменом вместе
http://localhost:3000/products/Huawei - путь

Route - та шляпа которая следит за адресом, NavLink указывает этот адрес. Как Route так и в Route нужно путь указывать с 
начальным слэшом иначе React неадекватно работает и при работе с вложенностью пути начинает неугомонно клеить то что надо и не надо.
<Router path='/products/:model'>

В param будем иметь {model: Huawei}
  Как я понял Switch та же логика ИЛИ. подключение только одного компонента в пачке Switch по указанному адресу адресам.
  Если нам нужно склеить адреса и компоненты, то 
  /images - родитель, /images/item-1 - дочерний на той же странице и т.д 


  Exact - указывает, что строка запроса должна в точности соответствовать шаблону маршрута
  path="/about/"
  соответствует 
  http://localhost:3000/about
  http://localhost:3000/about/
  без exact <Route > загрузит компонент about даже если путь 
  http://localhost:3000/about/2

  Strict - этот маршрут будет соответствовать только одному запросу 
  path="/about/
  http://localhost:3000/about/
*/

/*
  Какую роль играет Switch.

  Без Switch имея 2 компонента home и catalog и если построить такой путь /home/catalog
  то загрузятся два компонента. В моём случае 1й будет перекрывать 2й. То что мне нужно что бы 
  разместить компоненты по нужным позициям. Если установить Switch, то будет происходить переключение компонентов
*/
/*
  Вариант передачи через props сработает если в app что-то передано.
  <ChatContainer chat={this.props.chat} dispatch={this.props.dispatch} />} />

  При использовании Provider от Redux передача данных осуществляется до 
  контейнера не через props, а через функцию content
*/
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

  
*/

/*

  
Про пропсы. 
Предположим что на верхнем уровне мы имеем кучу методов. Мы будем передавать через пропс таким
образом что бы желательно компоненты получали только те методы которые им не обходимы.
Из-за того что мы имеем цепочку компонентов в компонентах, естественно в этой ситуации будут
компоненты которые просто транзитом будут передавать данные методы на нижний уровень.

Передача через Context не совсем удобна. 
1. Что бы не было циклического подключения нам нужно создать контекст в другом файле и уже его импортировать 
    в файле где ходим взять данные, потом импортировать куда хотим положить данные
2. т.к. MyContext.Provider принимает значения, а MyContext.Consumer компонент в который кладём callback 
   и забираем 1м параметром эти данные, далее возвращаем jsx
   Пример. 
   <MyContext.Consumer>
      {(value) => <Component {...value}>}
   </MyContext.Consumer>
   но есть одно но.
   Если данные нужны выше метода render, то тут проблема в таком варианте. Требуется не оборачивать 
   компонент MyContext ом, а передать его в специальное свойство класса прописав
   static contextType = MyContext. Тогда обращение в классе происходит к объекту content для получения 
   передаваемых данных

Кстате при большом желании можно передавать целые компоненты через пропс, а то и объект компонентов
*/