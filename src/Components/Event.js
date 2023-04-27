import Attendees from "./Attendees";
import { useState } from "react";
export default function Event({event, attendees, updateEventAttendance, toggleEventAttendees, showAttendees}) {
  const [showAttendees, setShowAttendees] = useState(false);
  return(
    <li key={event.id}>
    <img src={event.eventImage} alt={event.name} />
    <h5>
      {event.name} {event.eventType}
    </h5>
    <br />
    <span>Organized by: {event.organizer} </span>
    <br />
    <>
        <Attendees attendees={attendees} event={event} updateEventAttendance={updateEventAttendance} 
        toggleEventAttendees={toggleEventAttendees} showAttendees={showAttendees} />
    </>
  </li>
  )
}
