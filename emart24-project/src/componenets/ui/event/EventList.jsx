import React, { useState } from "react";
import style from './EventList.module.css';
import EventProductList from "./EventProductList";

function EventList({ eventList }) {
   const [selectedEventId, setSelectedEventId] = useState();

   const handleEventMenu = (id) => {
      setSelectedEventId(id);
   }

   return (
      <>
         <div className={style.menuList}>
            <ul>
               {
                  eventList && eventList.map(event => (
                     <li className={style.inactiveBtn}
                        key={event.id}
                        onClick={() => handleEventMenu(event.id)}
                     >
                        {event.name}
                     </li>
                  ))
               }
            </ul>
         </div>
         <EventProductList selectedEventId={selectedEventId} />
      </>
   );
}

export default EventList;