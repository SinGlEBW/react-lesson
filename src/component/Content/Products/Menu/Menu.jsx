import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';
import { Submenu } from './Submenu/Submenu';
//React.lazy(() => import('./OtherComponent')); -динамический import 
/*
   Когда собирается конечный проект весь код как я понимаю собирается в один файл который может быть очень 
   большим. Не рекомендуется иметь такой файл размером больше 300кб. 
   Что бы такой минифицированный код не разрастался придумали делить его на части и подключать
   в нужный момент времени через динамический import. 

   React.lazy будет подгружать к основному бандлу только тогда когда будет запрос к этому файлу
   динамический import возвращает Promise.

   О ленивой загрузке компонент который требует ленивой загрузки оборачивается в компонент 
   <React.Suspense fallback={<div>Загрузка...</div>}> </React.Suspense>
   которому в props передаётся fallback  начальное состояние пока то что между компонентом не загрузилось

*/

export const Menu = (props) => {

   let menu = props.product;
   let subMenuRef = useRef(null);
   let menuRoot = useRef(null)
   useEffect(() => {
      // window.onload = () => {
      //    Axios.get('http://127.0.0.1:4000/get-db')
      //    console.dir(1);
      // }
   })
   
   /*######---Events---###### */
   function evMouseEnter(e) {
      let el = menuRoot.current.children[2];
      if(menuRoot.current.contains(e.target))
         el.classList.add('submenu--active')
      
      //console.dir(e.relatedTarget);//откуда перешёл
      //console.dir(e.target);//куда перешёл
       
   }
   function evMouseLeave(e) { 
      let el = menuRoot.current.children[2];
      if(e.target.classList.contains('submenu--active'))
         e.target.classList.remove('submenu--active')
      if(menuRoot.current !== e.relatedTarget)
         el.classList.remove('submenu--active')
     
      // console.dir(e.target);//откуда ушёл
      // console.dir(e.relatedTarget);//куда перешёл
     
   }

   function ajaxRequest(e) {
      e.preventDefault();
      let body = new FormData(e.target);
      // 
      
   }
/*
   При наведении на родителя и на его дочерние элементы на submenu должен находиться класс submenu--active
   При отслеживании события onMouseEnter мы отслеживаем мышь только на родителе
*/
   return (
      <div className="menu__root" ref={menuRoot} onMouseEnter={evMouseEnter} onMouseLeave={evMouseLeave}>{/* */}
         <img className="menu__root-icon" src={menu.src} alt={Object.values(menu.name)}></img>
         <div className="menu__root-info info">
            <NavLink className="menu__info-title-link ui-link" to={`/catalog/${Object.keys(menu.name)}`}>
               {Object.values(menu.name)}
            </NavLink>
            <div className="menu__info-subtitles">
               <NavLink className="menu__info-subtitle-link ui-link" to="/products/catalog">С1</NavLink>
               <NavLink className="menu__info-subtitle-link ui-link" to="/products/catalog">С2</NavLink>
            </div>
         </div>
         <Submenu submenu={menu.submenu} subMenuRef={subMenuRef} />
      </div>
   )
}



