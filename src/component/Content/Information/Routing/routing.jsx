import React, { Component } from 'react';
import  './Routing.css';



export default class Routing extends Component {
   constructor(props){
      super(props)
      this.state = {data: undefined}
   }
   createMarkup = () => {
      return {__html: this.state.data};
    }
   eventAjax = async () => {
     let data = await fetch('http://localhost:8080/new')
     this.setState({data: await data.text()})
     console.dir(this.state.data);
   }
  
   render = () => {
      console.dir(this);
      return (  
         <div className="routing">
            <button className='routing__item' onClick={this.eventAjax}>Перейти</button>
            <div className="routing__item routing__item--box" dangerouslySetInnerHTML={this.createMarkup()}></div>
         </div>
      )
   }
};

        

         

/*
   Routing требуется для перехода по ссылкам без перезагрузки страницы.
   Пробую применить express.
   Выяснилось. Мы получаем всё содержимое component Начиная от import заканчивая
   фигурной скобкой.
   Можно конечно поднапрячся и присылать кусками html после этого нужно будет преобразовать 
   код в react сущность с помощью атрибута dangerouslySetInnerHTML в передаваемый блок
   которая принимает объект (__html: json код html.я) но это не безопасно для вторжения XSS атаки 

   Выводы.
   Express по факту требуется для обработки многих страниц,
   React-router обрабатывает одну страницу подменивая нужные компоненты 
   в зависимости от get запроса.

   В Express можно воспользоваться шаблонизатором handlebars и подкидывать 
   html код, что равносильно jsx куску кода. Отличие лишь в том что на серверной стороне
   будет запрос на сервер и обновление при каждом обращении к страницам сайта всего кода,
   то есть перерендер одних и тех же кусков кода.

   В React Ajax запрос на компонент. Если нам не требуется трогать header и footer то и 
   обновлять react не будет их

   При использовании библиотеки react-router-dom нужно не забывать обрамлять тегом
   BrowserRouter html код, только тогда можно будет пользоваться тегом Route.
   Существует ещё тег Router - пока не знаю что он представляет.
   Вообще использование тега Route - это похоже на принцип "условный рендеринг"
   только условия привязываются к get запросу

   ВАЖНО.
   Как я понял компонент Route в зависимости к какому component'у он обращается, тому он и передаёт в props свои параметры.
   в виде объектов history, location, match, staticContext
   Так же достаточно 1 раз обернуть тегом BrowserRouter в главном файле App и можно спокойно пользоваться
   Route.

   Route 
*/