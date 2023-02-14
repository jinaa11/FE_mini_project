import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { logInState } from "../state/logInState";
import { tokenState } from "../state/tokenState";
import style from './Login.module.css';

function Login() {
   const [inputs, setInputs] = useState({
      email: '',
      pw: ''
   });

   const handleOnChange = (e) => {
      setInputs({
         ...inputs,
         [e.target.name]: e.target.value
      })
   }

   const navigate = useNavigate();

   const setLogin = useSetRecoilState(logInState);
   const setToken = useSetRecoilState(tokenState);

   const handleLogin = (e) => {
      e.preventDefault();
      if (!inputs.email) {
         alert("이메일을 입력해주세요.");
      } else if (!inputs.pw) {
         alert("비밀번호를 입력해주세요.");
      } else {
         axios.get(`http://localhost:3001/users?email=${inputs.email}&password=${inputs.pw}`)
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
                  name='email'
                  value={inputs.email}
                  placeholder="Email"
                  onChange={handleOnChange}
               />
            </div>
            <div className={style.login_input}>
               <h4>비밀번호</h4>
               <input type='password'
                  name='pw'
                  value={inputs.pw}
                  placeholder="Password"
                  onChange={handleOnChange}
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