import React from "react";
import Attendees from "./Attendees";

function Event({
  event,
  toggleEventAttendees,
  showAttendees,
  updateEventAttendance,
}) {
  const {
    id,
    eventImage,
    name,
    eventType,
    organizer,
    people: attendees,
  } = event;

  return (
    <li key={id}>
      <img src={eventImage} alt={name} />
      <h5>
        {name} {eventType}
      </h5>
      <br />
      <span>Organized by: {organizer} </span>
      <br />
      <>
        <button onClick={toggleEventAttendees}>
          {!showAttendees ? "Show Attendees" : "Hide Attendees"}
        </button>

        {showAttendees ? (
          <Attendees
            attendees={attendees}
            updateEventAttendance={updateEventAttendance}
          />
        ) : null}
      </>
    </li>
  );
}

export default Event;
