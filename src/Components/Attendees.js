import { useState } from "react";
import Attendee from "./Attendee";

function Attendees({ attendees, updateEventAttendance, event }) {
  const [showAttendees, setShowAttendees] = useState(false);

  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }
  return (
    <>
      <button onClick={toggleEventAttendees}>
        {!showAttendees ? "Show Attendees" : "Hide Attendees"}
      </button>

      {showAttendees ? (
        <div className="attendees">
          {attendees.map((attendee, index) => (
            <>
              <Attendee
                attendee={attendee}
                event={event}
                updateEventAttendance={updateEventAttendance}
                index={index}
              />
            </>
          ))}
        </div>
      ) : null}
    </>
  );
}
export default Attendees;
