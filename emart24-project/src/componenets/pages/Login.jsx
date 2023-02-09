import axios from "axios";
import React, { useEffect, useState } from "react";

function Login() {
   const [inputId, setInputId] = useState('');
   const [inputPw, setInputPw] = useState('');

   const handleInputId = (e) => {
      setInputId(e.target.value)
   }
   const handleInputPw = (e) => {
      setInputPw(e.target.value)
   }
   const handleLogin = (e) => {
      e.preventDefault();
      console.log("id", inputId);
      console.log("pw", inputPw);
      console.log("로그인 클릭")
   }

   useEffect((data) => {
      try {
         axios.post('http://localhost:3001/users', {
            email: data.email,
            pw: data.pw
         })
            .then(res => {
               console.log(res.data)
               
            })
      } catch (error) {
         console.log(error)
      }

   }, [])

 

   return (
      <div>
         <h2>Login</h2>
         <div>
            <label>ID: </label>
            <input type='text' name='inputId' value={inputId} onChange={handleInputId} />
         </div>
         <div>
            <label>Pw: </label>
            <input type='text' name='inputPw' value={inputPw} onChange={handleInputPw} />
         </div>
         <button type='button' onClick={handleLogin}>Login</button>

      </div>
   );
}

export default Login;