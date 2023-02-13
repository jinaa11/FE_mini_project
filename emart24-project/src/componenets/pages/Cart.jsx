import axios from "axios";
import React, { useEffect, useState } from "react";
import CartList from "../ui/cart/CartList";

function Cart() {
   const userId=1;
   const [cartDatas, setCartDatas] = useState([]);
   const [isDelete, setIsDelete] = useState(false);

   useEffect(() => {
      axios.get(`http://localhost:3001/carts?userId=${userId}`)
      .then(res => {
         console.log(res.data)
         setCartDatas(res.data);
      })
   }, [userId, isDelete]);
   
   return(
      <div>
         {
            cartDatas && cartDatas.map(cartData => (
               <CartList
               key={cartData.id}
               cartData={cartData}
               isDelete={isDelete}
               setIsDelete={setIsDelete} />
            ))
         }
      </div>
   );
}

export default Cart;