import Attendees from "./Attendees";

export default function Event({
  toggleEventAttendees,
  showAttendees,
  setShowAttendees,
  attendees,
  event,
  updateEventAttendance,
}) {
  // console.log("event.id is:", event.id);
  return (
    <li className="event" key={event.id}>
      <img src={event.eventImage} alt={event.name} />
      <h5>
        {event.name} {event.eventType}
      </h5>
      <br />
      <span>Organized by: {event.organizer} </span>
      <br />
      <>
        <Attendees
          event={event}
          attendees={attendees}
          updateEventAttendance={updateEventAttendance}
          toggleEventAttendees={toggleEventAttendees}
          showAttendees={showAttendees}
          setShowAttendees={setShowAttendees}
        />
      </>
    </li>
  );
}
