import axios from "axios";
import React, { useEffect, useState } from "react";
import style from './EventProductList.module.css';
import EventListCard from "./EventListCard";

function EventProductList({selectedEventId}) {
   const [eventProductList, setEventProductList] = useState();

   useEffect(() => {
      axios.get(`http://localhost:3001/eventProductList?eventId=${selectedEventId}`)
      .then(res => {
         console.log(res.data)
         setEventProductList(res.data);
      })
      .catch(err => console.log(err))
   }, [selectedEventId])

   return (
      <section>
         <div className={style.eventList}>
            {
               eventProductList && eventProductList.map(product => (
                  <EventListCard key={product.id}
                     event={product} />
               ))
            }
         </div>
      </section>
   );
}

export default EventProductList;