import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { headerTop, headerTop2 } from "../../../data/headerMenu";
import { logInState } from "../../state/logInState";
import { tokenState } from "../../state/tokenState";
import style from './HeaderTopMenu.module.css';

function HeaderTopMenu() {
   const [login, setLogin] = useRecoilState(logInState);
   const [token, setToken] = useRecoilState(tokenState);
   console.log(login);

   const handleLogout = () => {
      // 로그인, 토큰 스테이트 초기화
      setLogin(false);
      setToken('');
   }


   return (
      <div className={style.topMenu}>
         <ul>
            {
               login ?
                  <>
                     <li>{token.name}님 환영합니다.</li>
                     {
                        headerTop2.map(menu => (
                           <li key={menu.id}>
                              {
                                 menu.name !== '로그아웃' ?
                                    <Link to={menu.link}>{menu.name}</Link>
                                    :
                                    <span style={{ cursor: 'pointer' }} onClick={handleLogout}>{menu.name}</span>
                              }
                           </li>
                        ))
                     }
                  </>
                  :
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