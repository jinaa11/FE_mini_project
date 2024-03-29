import React from "react";
import { Link } from "react-router-dom";
import { headerMenu } from "../../../data/headerMenu";
import style from './HeaderBottomMenu.module.css';

function HeaderBottomMenu() {
   return (
      <div className={style.headerTopWrap}>
         <div className={style.logo}>
            <Link to='/'>
               <img src="/assets/images/logo.png" alt='logo' />
            </Link>
         </div>
         <nav className={style.menu}>
            <ul>
               {
                  headerMenu.map(menu => (
                     <li key={menu.id}>
                        <Link to={menu.link}>{menu.name}</Link>
                     </li>
                  ))
               }
            </ul>
         </nav>
      </div>
   );
}

export default HeaderBottomMenu;