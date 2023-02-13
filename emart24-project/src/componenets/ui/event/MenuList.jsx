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

   const handleMenu = () => {
      axios.get(`http://localhost:3001/events?name=${menuData.name}`)
      .then(res => {
         console.log(res.data)
      })
   }

   return (
      <div className={style.menuList}>
         <ul>
            {
               menuData && menuData.map(menu => (
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