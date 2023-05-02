export default function Attendees({ toggleEventAttendees, showAttendees }) {
  return(
    <button onClick={toggleEventAttendees}>
    {!showAttendees ? "Show Attendees" : "Hide Attendees"}
    </button>
  )
}
