import React, { useEffect, useState } from "react";
import EventList from "../ui/event/EventList";
import MenuList from "../ui/event/MenuList";
import axios from "axios";

function Event() {
   const [eventMenu, setEventMenu] = useState();

   useEffect(() => {
      axios.get('http://localhost:3001/events')
         .then(res => {
            setEventMenu(res.data)
            console.log(res.data);
         })
         .catch(err => console.log(err))
   }, [])

   return (
      <div className="container">
         <p>이달의 이벤트</p>
         <MenuList eventMenu={eventMenu} />
         <EventList />
      </div>
   );
}

export default Event;