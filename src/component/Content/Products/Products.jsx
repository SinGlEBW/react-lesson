import React from 'react';
import './Products.css';

import { NavLink } from 'react-router-dom';
import { Menu } from './Menu/Menu';
import Axios from 'axios';


const Products = (props) => {

   let phone = props.products.phone;
   let menu = props.products.menu;
   let checkFilter = props.products.phoneFILTER[0].name;

   let showProducts = phone.map((item) => {

      return (
         <NavLink className="products__item" key={item.id} to={`/catalog/phone/${item.name}`}>
            <span className="products__item-title">{item.name}</span>
            <img className="products__item-image" src={item.src} alt={item.name} />
         </NavLink>
      )
   })

   let menuList = menu.map((item) => {

      return <Menu product={item} key={item.id} />
   })

function ajaxRequest(e) {
      e.preventDefault();
      Axios.get('http://127.0.0.1:4000/catalog')
         .then(response => console.dir(response.data))
         
         .catch(() => console.log("Какая-то ошибка"));
      // let body = new FormData(e.target);
      // Axios.get('http://127.0.0.1:4000/catalog/?name=')
    
   }


   return (
      <main className="products">
         <div className="container">
            <div className="products-wrap">
               <div className="products__menu menu">
                  {menuList}
                  <form onSubmit={ajaxRequest}>
                     <input type="text" name="menuProduct" />
                     <input type="submit" name="ok" />
                  </form>
               </div>
               <div className="products__show">
                  <span className="products__title">{checkFilter}</span>
                  <div className="products__items">
                     {showProducts}
                  </div>
               </div>
            </div>
         </div>
      </main>
   )
}

export default Products;



/*
   О серверной части.
   Можно посылать запрос на сервер взяв данные из get параметра, а можно самому собрать get
   и отправить.
*/
/*

   localStorage.getItem('check') возвращает строку, поэтому добавляя в defaultChecked={localStorage.getItem('check')} мы
   будем получать всегда активную галочку для checkbox, потому что строка. Обернув строку в Boolean получим всегда
   true т.к. там строка и не важно что там 'false'. Я на этом собаку съел. Так что хранить в localeStorage
   исключительно в формате JSON и в дальнейшем получать значения через parse

   так же важно то, что использование за пределами setState нет гарантии получить обновлённое значение к которому обращаемся
   для этого лучше использовать 2й параметр callback в котором 100% получаем обновлённое значение state
   или использовать async await
   Пример:

   async checkEvent(){
      this.setState({check: (!this.state.check)}, (item) => {
         console.dir(this.state.check);//тут уже новое
      })
      console.dir(this.state.check);//тут старое значение
   }


   «Состояние» очень похоже на уже знакомые нам пропсы, отличие в том,
   что состояние контролируется и доступно только конкретному компоненту.

   Всё что требуется для работы часов это обновлять ReactDOM через setInterval и добавить куда надо
   часы, но есть другое решение Метод жизненного цикла. Сделано это для того что бы после удаления
   одного компонента максимально чисто было в других файлах
   Первоначальный рендеринг компонента в DOM называется «монтирование» (mounting).
Каждый раз когда DOM-узел, созданный компонентом, удаляется, происходит «размонтирование» (unmounting).
Чтобы избежать утечки ресурсов, нужно сбрасывать таймер при каждом «размонтировании».

componentDidMount - в этом методе не вызывают setState. Метод вызывается после монтирования компонента в DOM
*/