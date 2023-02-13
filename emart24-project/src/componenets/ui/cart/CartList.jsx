import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import style from './CartList.module.css';
import { CartCountState } from '../../state/CartCountState';

function CartList({ cartData, isDelete, setIsDelete }) {
   const [cartObj, setCartObj] = useState(
      {
         id: cartData.id,
         userId: cartData.userId,
         productId: cartData.productId,
         productImg: "",
         productName: "",
         productPrice: 0,
         qty: cartData.qty
      }
   )

   const [cartQty, setCartQty] = useRecoilState(CartCountState);

   const url = `http://localhost:3001/products/${cartData.productId}`;

   useEffect(() => {
      axios.get(url)
         .then(res => {
            setCartObj({
               ...cartObj,
               productImg: res.data.thumbnail,
               productName: res.data.name,
               productPrice: res.data.price
            })
         })
   }, [url])

   // qty patch
   const handleQtyPatch = (qty) => {
      axios.patch(`http://localhost:3001/carts/${cartObj.id}`, {
         qty: qty
      })
         .then(res => {
            console.log(res.data)
         })
         .catch(err => console.log(err));
   }

   // decrease qty
   const handleQtyDecre = () => {
      if (cartObj.qty === 1) {
         return alert("최소 수량은 1개 입니다.");
      }
      setCartObj({
         ...cartObj,
         qty: cartObj.qty - 1
      })
      handleQtyPatch(cartObj.qty - 1);
      console.log(cartObj);
   }

   // increase qty
   const handleQtyIncre = () => {
      setCartObj({
         ...cartObj,
         qty: cartObj.qty + 1
      })
      handleQtyPatch(cartObj.qty + 1);
      console.log(cartObj);
   }

   // delete qty (삭제 후 바로 반영 안 됨 - 새로고침 눌러야함)
   const handleDelete = () => {
      let result = window.confirm(`${cartObj.productName} 상품을 삭제하시겠습니까?`);
      console.log(result);
      if(result) {
         axios.delete(`http://localhost:3001/carts/${cartObj.id}`)
         .then(res => {
            console.log(res.data)
            setIsDelete(!isDelete)
         })
         .catch(err => console.log(err))
      }
   }

   return (
      <div className={style.cartList}>
         <img src={cartObj.productImg} alt={cartObj.productName} />

         <p>{cartObj.productName}</p>
         <div className={style.cartInfo}>
            <p className={style.price}>{cartObj.productPrice * cartObj.qty}원</p>
            <div className={style.qtyBtn}>
               <p onClick={handleQtyDecre}>-</p>
               <p>{cartObj.qty}</p>
               <p onClick={handleQtyIncre}>+</p>
            </div>
         </div>
         <div className={style.delete}>
            <span><img onClick={handleDelete} src='/assets/images/delete.png' alt="삭제" /></span>
         </div>
      </div>
   );
}

export default CartList;