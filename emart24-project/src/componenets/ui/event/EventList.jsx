import axios from "axios";
import React, { useEffect, useState } from "react";
import style from './EventList.module.css';
import EventListCard from "./EventListCard";

function EventList() {
   const [productData, setProductData] = useState();

   useEffect(() => {
      axios.get(`http://localhost:3001/products`)
         .then(res => setProductData(res.data))
         .catch(err => console.log(err))
   }, [])

   return (
      <section>
         <div className={style.eventList}>
            {
               productData && productData.map(product => (
                  <EventListCard key={product.id}
                     product={product} />
               ))
            }
         </div>
      </section>
   );
}

export default EventList;