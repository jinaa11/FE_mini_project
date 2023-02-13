import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { logInState } from "../state/logInState";
import { tokenState } from "../state/tokenState";
import style from './Login.module.css';

function Login() {
   const [inputEmail, setInputEmail] = useState('');
   const [inputPw, setInputPw] = useState('');
   const [button, setButton] = useState(true);


   const [userData, setUserData] = useState({
      email: '',
      password: '',
   })

   const navigate = useNavigate();

   const [login, setLogin] = useRecoilState(logInState);
   const setToken = useSetRecoilState(tokenState);

   const handleInputId = (e) => {
      setInputEmail(e.target.value)
   }
   const handleInputPw = (e) => {
      setInputPw(e.target.value)
   }
   const handleLogin = (e) => {
      e.preventDefault();
      if (!inputEmail) {
         alert("이메일을 입력해주세요.");
      } else if (!inputPw) {
         alert("비밀번호를 입력해주세요.");
      } else {
         axios.get(`http://localhost:3001/users?email=${inputEmail}&${inputPw}`)
            .then(res => {
               console.log(res.data);
               if (res.data.length === 0) {
                  alert("아이디 또는 비밀번호를 잘못 입력했습니다.");
               } else {
                  setLogin(true);
                  setToken(res.data[0])
                  navigate('/')
               }
            })
            .catch(err => console.log(err))
      }
   }

   const changeButton = () => {
      inputEmail.includes('@') ? setButton(false) : setButton(true);
   }
   const goJoin = () => {
      navigate('/join');
   }

   return (
      <div className={style.wrap}>
         <div className={style.login}>
            <h2>로그인</h2>
            <div className={style.login_input}>
               <h4>이메일</h4>
               <input type='text'
                  name='inputEmail'
                  value={inputEmail}
                  placeholder="Email"
                  onChange={handleInputId}
                  onKeyUp={changeButton}
               />
            </div>
            <div className={style.login_input}>
               <h4>비밀번호</h4>
               <input type='password'
                  name='inputPw'
                  value={inputPw}
                  placeholder="Password"
                  onChange={handleInputPw}
                  onKeyUp={changeButton}
               />
            </div>
            <div className={style.login_etc}>
               <div className={style.go_etc}>
                  <p onClick={goJoin} >아직 회원이 아니신가요?</p>
               </div>
            </div>
            <div className={style.login_btn}>
               <p onClick={handleLogin}>로그인 </p>
            </div>
         </div>
      </div>
   );
}

export default Login;