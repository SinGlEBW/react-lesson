import React from 'react';
import { NavLink } from 'react-router-dom';
import './Submenu.css';

export const Submenu = ({submenu, subMenuRef}) => {
  
   let linkProduct = (item) => item.link.map( (link) => 
      (
         <NavLink className="submenu__second ui-link" to="/catalog/" key={link.id}>
            {link.name}
            <span className="submenu__second-count">{'1'}</span>
            <i className="submenu__second-popup-icon">></i>
         </NavLink>
      ))

   let submenuLinkProducts = submenu.map( (item) => 
      (
         <React.Fragment key={item.id}> {/* Короткий синтаксис <> </> но вроде поддержка пока не позволяет  */}
            
           <NavLink className="submenu__first ui-link" to="/catalog/" >{Object.values(item.title)}</NavLink>
            <div className="submenu__second-wrap">
             {linkProduct(item)}
            </div>
         </React.Fragment>
        
     ))

   return (
      <div className="menu__submenu submenu" ref={subMenuRef}>
        {submenuLinkProducts}
      </div>
   )
}