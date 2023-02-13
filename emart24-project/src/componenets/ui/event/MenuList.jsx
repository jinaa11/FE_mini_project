import axios from "axios";
import React, { useEffect, useState } from "react";
import style from './MenuList.module.css';

function MenuList({ eventMenu }) {
   const [menuName, setMenuName] = useState();

   const handleMenu = () => {
      
   }

   return (
      <div className={style.menuList}>
         <ul>
            {
               eventMenu && eventMenu.map(menu => (
                  <li className={style.menuBtn}
                     key={menu.id}
                     onClick={handleMenu}
                  >
                     {menu.name}
                  </li>
               ))

            }
         </ul>
      </div>
   );
}

export default MenuList;