import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from "recoil";
import { tokenState } from '../state/tokenState';
import style from './Mypage.module.css';

function Mypage() {
   const [userInfo, setUserInfo] = useState();
   const token = useRecoilValue(tokenState);
   const navigate = useNavigate();   

   useEffect(() => {
      console.log(token);
      axios.get(`http://localhost:3001/users?id=${token.id}`)
         .then(res => {
            console.log(res.data);
            setUserInfo(res.data);
         })
         .catch(err => console.log(err))
   }, [])

   const handleChangePw = () => {
      navigate('/change-pw')
   }

   return (
      <div className={style.wrap}>
         <h2>회원정보</h2>
         
         <p>이메일</p>
         <p>{token.email}</p>
         <p>이름</p>
         <p>{token.name}</p>
         <p className={style.pwChange}
            onClick={handleChangePw}
         >비밀번호 변경</p>
      </div>
   );
}

export default Mypage;