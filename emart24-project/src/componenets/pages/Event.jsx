import React, { useEffect, useState } from "react";
import axios from "axios";
import EventList from "../ui/event/EventList";

function Event() {
   const [eventList, setEventList] = useState();
   

   useEffect(() => {
      axios.get('http://localhost:3001/events')
         .then(res => {
            setEventList(res.data)
            console.log(res.data);
         })
         .catch(err => console.log(err))
   }, [])

   return (
      <div className="container">
         <p>이달의 이벤트</p>
         <EventList eventList={eventList} />
      </div>
   );
}

export default Event;