import Attendees from "./Attendees";
import Header from "./Header";

export default function Event({
  event,
  // toggleEventAttendees,
  // showAttendees,
  attendees,
  updateEventAttendance,
}) {
  return (
    <>
      <li key={event.id}>
        <img src={event.eventImage} alt={event.name} />
        <h5>
          {event.name} {event.eventType}
        </h5>
        <br />
        <span>Organized by: {event.organizer} </span>
        <br />
        <Attendees
          event={event}
          // toggleEventAttendees={toggleEventAttendees}
          // showAttendees={showAttendees}
          attendees={attendees}
          updateEventAttendance={updateEventAttendance}
        />
      </li>
    </>
  );
}
