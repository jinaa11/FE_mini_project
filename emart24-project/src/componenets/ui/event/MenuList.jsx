import axios from "axios";
import React, { useEffect, useState } from "react";
import style from './MenuList.module.css';

function MenuList() {
   const [menuData, setMenuData] = useState();

   useEffect(() => {
        axios.get('http://localhost:3001/events')
         .then(res => {
            setMenuData(res.data)
            console.log(res.data);
         })
         .catch(err => console.log(err))
   }, [])

   return (
      <div className={style.menuList}>
         <ul>
            {
               menuData && menuData.map(menu => (
                  <li className={style.menuBtn}
                     key={menu.id} >
                     {menu.name}
                     
                  </li>
               ))
            }
         </ul>

      </div>
   );
}

export default MenuList;