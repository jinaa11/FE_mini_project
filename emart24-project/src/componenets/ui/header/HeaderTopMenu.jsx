import React from "react";
import { Link } from "react-router-dom";
import { headerTop } from "../../../data/headerMenu";
import style from './HeaderTopMenu.module.css';

function HeaderTopMenu() {
   return (
      <div className={style.topMenu}>
         <ul>
            {
               headerTop.map(menu => (
                  <li key={menu.id}>
                     <Link to={menu.link}>{menu.name}</Link>
                  </li>
               ))
            }
         </ul>
      </div>
   );
}

export default HeaderTopMenu;