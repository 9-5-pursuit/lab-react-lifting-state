import React from "react";

function Attendee({ attendee, updateEventAttendance, eventId }) {
  function handleAttendanceToggle() {
    updateEventAttendance(eventId, attendee.id);
  }

  return (
    <div className="attendee">
      <p>
        <img src={attendee.avatar} alt={attendee.firstName} />
        {"   "}
        <span>
          {attendee.firstName} {attendee.lastName}
        </span>
      </p>
      <p>
        <button className="clickable" onClick={handleAttendanceToggle}>
          Attending:
        </button>
        <span>{attendee.attendance ? "✅" : "❌"}</span>
      </p>

      <p>
        <span>Note:</span> {attendee.note}
      </p>
    </div>
  );
}

export default Attendee;
