import axios from "axios";
import React, { useEffect, useState } from "react";
import style from './EventList.module.css';
import EventListCard from "./EventListCard";

function EventList() {
   const [productData, setProductData] = useState();
   

   useEffect(() => {
      axios.get('http://localhost:3001/eventProductList')
         .then(res => {
            setProductData(res.data);
            console.log(res.data);
         })
         .catch(err => console.log(err))
   }, [])

   return (
      <section>
         <div className={style.eventList}>
            {
               productData && productData.map(product => (
                  <EventListCard key={product.id}
                     event={product} />
               ))
            }
         </div>
      </section>
   );
}

export default EventList;