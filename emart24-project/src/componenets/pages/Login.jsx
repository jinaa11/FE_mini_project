import axios from "axios";
import React, {useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { logInState } from "../state/logInState";
import { tokenState } from "../state/tokenState";
import style from './Login.module.css';

function Login() {
   const [inputId, setInputId] = useState('');
   const [inputPw, setInputPw] = useState('');
   const [button, setButton] = useState(true);

   const navigate = useNavigate();

   const [login, setLogin] = useRecoilState(logInState);
   const setToken = useSetRecoilState(tokenState);

   // 로그인 유저 json-server에서 확인
   const checkedUser = async (email, pw) => {
      const res = await axios.get("http://localhost:3001/users");
      let checked = res.data.find(users => users.email === email && users.password === pw);
      if (checked === undefined) {
         alert("아이디 또는 비밀번호를 잘못 입력했습니다.");
      } else {
         setLogin(true);
         setToken(res.data.token);
         navigate('/');
        
      }
   }

   const handleInputId = (e) => {
      setInputId(e.target.value)
   }
   const handleInputPw = (e) => {
      setInputPw(e.target.value)
   }
   const handleLogin = (e) => {
      e.preventDefault();
      if (!inputId) {
         alert("아이디를 입력해주세요.");
      } else if (!inputPw) {
         alert("비밀번호를 입력해주세요.");
      } else {
         checkedUser(inputId, inputPw);
      }
   }

   const changeButton = () => {
      inputId.includes('@') ? setButton(false) : setButton(true);
   }

   return (
      <div className={style.wrap}>
         <div className={style.login}>
            <h2>Login</h2>
            <div className={style.login_id}>
               <h4>Email</h4>
               <input type='text'
                  name='inputId'
                  value={inputId}
                  placeholder="Email"
                  onChange={handleInputId}
                  onKeyUp={changeButton}
               />
            </div>
            <div className={style.login_pw}>
               <h4>Password</h4>
               <input type='password'
                  name='inputPw'
                  value={inputPw}
                  placeholder="Password"
                  onChange={handleInputPw}
                  onKeyUp={changeButton}
               />
            </div>
            <div className={style.login_etc}>
               <div className={style.forgot_pw}>
                  <p>Forgot Password?</p>
               </div>
            </div>
            <div className={style.login_btn}>
               <input type="submit" disabled={button} onClick={handleLogin} value="Login" />
            </div>
         </div>
      </div>
   );
}

export default Login;