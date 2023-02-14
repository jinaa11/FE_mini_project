import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { tokenState } from '../../state/tokenState';
import style from './ChangePw.module.css'

function ChangePw() {
   const token = useRecoilValue(tokenState);
   const [errMsg, setErrMsg] = useState('');
   const [isCorrectPw, setIsCorrectPw] = useState(false);
   const [inputs, setInputs] = useState({
      pw: '',
      newPw: '',
      confirmNewPw: ''
   });
   const navigate = useNavigate();

   const handleOnChange = (e) => {
      setInputs({
         ...inputs,
         [e.target.name]: e.target.value,
      })
      if (e.target.name === 'pw') {
         setIsCorrectPw(false);
         axios.get(`http://localhost:3001/users/${token.id}`)
         .then(res => {
            if (res.data.password !== e.target.value) {
               setErrMsg("현재 비밀번호가 틀렸습니다.")
            } else {
               setIsCorrectPw(true);
               setErrMsg("");
            }
         })
         .catch(err => console.log(err))
      }
   }

   const handleModify = (e) => {
      if (!inputs.pw) {
         alert("현재 비밀번호를 입력해주세요.");
      } else if (!inputs.newPw) {
         alert("새 비밀번호를 입력해주세요.");
      } else if (!inputs.confirmNewPw) {
         alert("새 비밀번호 확인을 입력해주세요.");
      } else if (inputs.newPw !== inputs.confirmNewPw) {
         alert("입력하신 비밀번호가 일치하지 않습니다..");
      } else if (!isCorrectPw) {
         alert("현재 비밀번호가 틀립니다. 다시 입력해주세요.");
      } else {
         axios.patch(`http://localhost:3001/users/${token.id}`, {
            password: inputs.newPw
         })
            .then(res => {
               console.log(res.data);
               alert("비밀번호 변경이 완료되었습니다.");
               navigate('/');

            })
            .catch(err => console.log(err))
      }
   }

   return (
      <div className={style.wrap}>
         <div className={style.changePw}>
            <h2>비밀번호 변경</h2>

            <div className={style.changePw_input}>
               <h4>현재 비밀번호</h4>
               <input type='password'
                  name='pw'
                  placeholder="현재 비밀번호를 입력하세요."
                  onBlur={handleOnChange}
               />
               <p>{errMsg}</p>
            </div>
            <div className={style.changePw_input}>
               <h4>새 비밀번호</h4>
               <input type='password'
                  name='newPw'
                  value={inputs.newPw}
                  placeholder="새 비밀번호를 입력하세요."
                  onChange={handleOnChange}
               />
            </div>
            <div className={style.changePw_input}>
               <h4>새 비밀번호 확인</h4>
               <input type='password'
                  name='confirmNewPw'
                  value={inputs.confirmNewPw}
                  placeholder="새 비밀번호를 한 번 더 확인해주세요."
                  onChange={handleOnChange}
               />
            </div>
            <div className={style.modify_btn}>
               <p onClick={handleModify}>변경하기</p>
            </div>
         </div>
      </div>
   );
}

export default ChangePw;