import axios from "axios";
import React, { useEffect, useState } from "react";
import style from './CartList.module.css';

function CartList({ cartData }) {
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
            console.log(cartObj);
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

   // delete qty
   const handleDelete = () => {
      
   }

   return (
      <div className={style.cardListWrap}>
         <img className={style.image} src={cartObj.productImg} alt={cartObj.productName} />
         <p>{cartObj.productName}</p>
         <div>
            <p>{cartObj.productPrice * cartObj.qty}원</p>
            <p onClick={handleQtyDecre}><span>-</span></p>
            <p><span>{cartObj.qty}</span></p>
            <p onClick={handleQtyIncre}><span>+</span></p>
         </div>
      </div >
   );
}

export default CartList;