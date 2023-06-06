import Attendee from "./Attendee";
import { useState } from "react";
export default function Attendees({ attendees, updateEventAttendance, event }) {
  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }
  const [showAttendees, setShowAttendees] = useState(false);
  return (
    <>
      <button onClick={toggleEventAttendees}>
        {!showAttendees ? "Show Attendees" : "Hide Attendees"}
      </button>

      {showAttendees ? (
        <div className="attendees">
          {attendees.map((attendee, index) => (
            <Attendee
              attendee={attendee}
              updateEventAttendance={updateEventAttendance}
              event={event}
            />
          ))}
        </div>
      ) : null}
    </>
    //---------------------//
  );
}

//---------------Attendee------------//

/* <>

          <div key={attendee.id} className="attendee">
            <p>
              <img src={attendee.avatar} alt={attendee.firstName} />
              {"   "}
              <span>
                {" "}
                {attendee.firstName} {attendee.lastName}{" "}
              </span>
            </p>
            <p>
              <button
                className="clickable"
                onClick={() => updateEventAttendance(event.id, attendee.id)}
              >
                Attending:
              </button>
              <span>{attendee.attendance ? "✅" : "❌"}</span>
            </p>

            <p>
              <span>Note:</span> {attendee.note}
            </p>
          </div>
        </> */

// function toggleEventAttendees() {
//   setShowAttendees(!showAttendees);
// }
// const [showAttendees, setShowAttendees] = useState(false);

//   <>
//   <button onClick={toggleEventAttendees}>
//     {!showAttendees ? "Show Attendees" : "Hide Attendees"}
//   </button>

//   {showAttendees ? (
//     <Attendees
//       updateEventAttendance={updateEventAttendance}
//       attendees={attendees}
//       event={event}
//     />
//   ) : null}
// </>

//    <Attendees
//       updateEventAttendance={updateEventAttendance}
//       attendees={attendees}
//       event={event}
//     />
