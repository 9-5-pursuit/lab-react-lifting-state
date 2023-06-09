import React from "react";
import Attendee from "./Attendee";

function Attendees({ event, updateEventAttendance }) {
  const { people: attendees } = event;

  return (
    <div className="attendees">
      {attendees.map((attendee, index) => (
        <Attendee
          key={attendee.id}
          attendee={attendee}
          updateEventAttendance={updateEventAttendance}
          eventId={event.id}
        />
      ))}
    </div>
  );
}

export default Attendees;
