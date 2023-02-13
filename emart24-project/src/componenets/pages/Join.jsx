import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import style from './Join.module.css';

function Join() {
   const [email, setEmail] = useState('');
   const [name, setName] = useState('');
   const [pw, setPw] = useState('');
   const [confirmPw, setConfirmPw] = useState('');
   const [emailMsg, setEmailMsg] = useState('');
   const [isActive, setIsActive] = useState(false);
   const [isDupliCheck, setIsDupliCheck] = useState(false);

   const activeClass = isActive ? style.activeBtn : style.disabledBtn;
   const navigate = useNavigate();

   // const [inputs, setInputs] = useState({
   //    email: '',
   //    password: '',
   //    confirmPw: '',
   //    name: ''
   // })

   // const handleChange = (e) => {
   //    const { name, value } = e.target;
   //    const nextInputs = {
   //       inputs, [name]: value,
   //    }
   //    setInputs(nextInputs)
   // }

   const handleEmail = (e) => {
      setIsDupliCheck(false);
      setEmail(e.target.value);
      if(!email.includes('@')) {
         setEmailMsg("이메일 형식에 맞지 않습니다.");
      } else {
         setEmailMsg("");
      }
   }
   const handleName = (e) => {
      setName(e.target.value);
   }
   const handlePw = (e) => {
      setPw(e.target.value);
   }
   const handleConfirmPw = (e) => {
      setConfirmPw(e.target.value);
   }

   const handleJoin = (e) => {
      e.preventDefault();
      if (!email) {
         alert("이메일을 입력해주세요.");
      } else if (!pw) {
         alert("비밀번호를 입력해주세요.");
      } else if (!confirmPw) {
         alert("비밀번호 확인을 입력해주세요.");
      } else if (pw !== confirmPw) {
         alert("입력하신 비밀번호가 일치하지 않습니다.")
      } else if (!name) {
         alert("이름을 입력해주세요.");
      } else if (!isDupliCheck) {
         alert("이메일 중복 확인을 해주세요.");
      }
      else {
         axios.post('http://localhost:3001/users', {
            name: name,
            email: email,
            password: pw
         })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
         setIsActive(true);
         alert("회원가입을 환영합니다.")
         // navigate('/login');
      }
   }

   // 이메일 중복 체크
   const handleCheckedDuplication = () => {
      if (email === '') {
         setEmailMsg("이메일을 입력해주세요.");
      } else {
         axios.get(`http://localhost:3001/users?email=${email}`)
            .then(res => {
               if (res.data.length === 0) {
                  setEmailMsg("사용 가능한 이메일입니다.");
                  setIsDupliCheck(true);
               } else {
                  setEmailMsg("이미 존재하는 이메일입니다.");
               }
            })
          
      }
   }

   return (
      <div className={style.wrap}>
         <div className={style.join}>
            <h2>회원가입</h2>
            <h4 className={style.email_title}>이메일</h4>
            <div className={style.join_id}>
               <input type='text'
                  name='email'
                  placeholder="email"
                  // 포커스 변경 혹은 다음 탭 선택하면 넘어감
                  onBlur={handleEmail}
               />
               <button onClick={handleCheckedDuplication}>중복 확인</button>
            </div>
            <div className={style.join_input}>
               <p>{emailMsg}</p>
               <h4>비밀번호</h4>
               <input type='password'
                  name='pw'
                  value={pw}
                  placeholder="Password"
                  onChange={handlePw}
               />
            </div>
            <div className={style.join_input}>
               <h4>비밀번호 확인</h4>
               <input type='password'
                  name='confirmPw'
                  value={confirmPw}
                  placeholder="Confirm Password"
                  onChange={handleConfirmPw}
               />
            </div>
            <div className={style.join_input}>
               <h4>이름</h4>
               <input type='text'
                  name='name'
                  value={name}
                  placeholder="이름"
                  onChange={handleName}
               />
            </div>
            <div className={style.join_btn}>
               <p
                  className={style.activeBtn}
                  onClick={handleJoin}
               >가입하기</p>
            </div>
         </div>
      </div>
   );
}

export default Join;