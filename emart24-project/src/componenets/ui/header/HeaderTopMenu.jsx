import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { headerTop } from "../../../data/headerMenu";
import { logInState } from "../../state/logInState";
import style from './HeaderTopMenu.module.css';

function HeaderTopMenu() {
   const [user, setUser] = useRecoilState(logInState);
   
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