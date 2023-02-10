import axios from "axios";
import React, { useEffect, useState } from "react";
import CartList from "../ui/cart/CartList";

function Cart() {
   const userId=1;
   const [cartDatas, setCartDatas] = useState([]);

   useEffect(() => {
      axios.get(`http://localhost:3001/carts?userId=${userId}`)
      .then(res => {
         console.log(res.data)
         setCartDatas(res.data);
      })
   }, [userId]);
   
   return(
      <div>
         {
            cartDatas && cartDatas.map(cartData => (
               <CartList
               key={cartData.id}
               cartData={cartData} />
            ))
         }
      </div>
   );
}

export default Cart;