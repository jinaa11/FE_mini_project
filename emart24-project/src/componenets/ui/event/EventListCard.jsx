import React, { useEffect, useState } from "react";
import axios from "axios";
import style from './EventListCard.module.css';

function EventListCard({ event }) {
   const [eventProduct, setEventProduct] = useState();

   useEffect(() => {
      axios.get(`http://localhost:3001/products?id=${event.productId}`)
         .then(res => {
            console.log(res.data[0])
            setEventProduct(res.data[0]);
         })
   }, [])

   return (
      <div className={style.eventListCardWrap}>
         {
            eventProduct &&
            <div className={style.eventListCard}>
               <img
                  src={eventProduct.thumbnail}
                  alt={eventProduct.description}
               />
               <div className={style.productInfo}>
                  <p>{eventProduct.name}</p>
                  <p className={style.price}>{eventProduct.price}원</p>
               </div>
            </div>
         }

      </div>

   );
}

export default EventListCard;