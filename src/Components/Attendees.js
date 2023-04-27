import Attendee from "./Attendee";
import { useState } from "react";
// import {showAttendees} from "./App.js"

export default function Attendees({ updateEventAttendance, attendees, event }) {
  const [showAttendees, setShowAttendees] = useState(false);

  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }

  return (
    <>
      <button onClick={toggleEventAttendees}>
        {!showAttendees ? "Show Attendees" : "Hide Attendees"}
      </button>
      ;
      {showAttendees ? (
        <div className="attendees">
          {attendees.map((attendee, index) => (
            <>
              <Attendee
                updateEventAttendance={updateEventAttendance}
                event={event}
                attendee={attendee}
                index={index}
              />
            </>
          ))}
        </div>
      ) : null}
    </>
  );
}
