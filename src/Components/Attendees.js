import React from "react";

function Attendees({ attendees, updateEventAttendance }) {
  return (
    <div className="attendees">
      {attendees.map((attendee) => (
        <div key={attendee.id} className="attendee">
          <p>
            <img src={attendee.avatar} alt={attendee.firstName} />
            {"   "}
            <span>
              {attendee.firstName} {attendee.lastName}
            </span>
          </p>
          <p>
            <button
              className="clickable"
              onClick={() => updateEventAttendance(attendee.id)}
            >
              Attending:
            </button>
            <span>{attendee.attendance ? "✅" : "❌"}</span>
          </p>
          <p>
            <span>Note:</span> {attendee.note}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Attendees;
