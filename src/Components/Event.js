import React, { useState } from "react";
import Attendees from "./Attendees";

function Event({ event, updateEventAttendance }) {
  const [showAttendees, setShowAttendees] = useState(false);

  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }

  return (
    <>
      <li className="event" key={event.id}>
        <img src={event.eventImage} alt={event.name} />
        <h5>
          {event.name} {event.eventType}
        </h5>
        <br />
        <span>Organized by: {event.organizer} </span>
        <br />
        <>
          <button onClick={toggleEventAttendees}>
            {!showAttendees ? "Show Attendees" : "Hide Attendees"}
          </button>

          {showAttendees && (
            <Attendees
              event={event}
              updateEventAttendance={updateEventAttendance}
            />
          )}
        </>
      </li>
    </>
  );
}

export default Event;
