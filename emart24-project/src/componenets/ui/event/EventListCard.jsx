import React, { useEffect, useState } from "react";
import axios from "axios";
import style from './EventListCard.module.css';
import { Link } from "react-router-dom";

function EventListCard({ event }) {
   const [eventProduct, setEventProduct] = useState();

   useEffect(() => {
      axios.get(`http://localhost:3001/products?id=${event.productId}`)
         .then(res => {
            setEventProduct(res.data[0]);
         })
   }, [])

   return (
      <div className={style.eventListCardWrap}>
         {
            eventProduct &&
            <div className={style.eventListCard}>
               <Link to={`/product-detail/${event.productId}`}>
               <img
                  src={eventProduct.thumbnail}
                  alt={eventProduct.description}
               />
               </Link>
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