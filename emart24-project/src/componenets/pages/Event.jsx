import React, { useEffect, useState } from "react";
import EventList from "../ui/event/EventList";
import MenuList from "../ui/event/MenuList";
import axios from "axios";

function Event() {
   return (
      <div className="container">
         <p>이달의 이벤트</p>
         <MenuList />
         {/* <EventList /> */}
      </div>
   );
}

export default Event;