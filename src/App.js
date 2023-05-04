import { useState } from "react";
import eventsData from "./data";
import { v1 as generateUniqueID } from "uuid";
// import Attendees from "./Attendees";
import Event from "./Components/Event";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NewEventForm from "./Components/NewEventForm";

function App() {
  const [events, setEvents] = useState(eventsData);
  const [selectOption, setSelectOption] = useState("");
  // const [showAttendees, setShowAttendees] = useState(false)
  const [newEvent, setNewEvent] = useState({
    id: "",
    eventType: "",
    name: "",
    organizer: "",
    eventImage: "",
    date: "",
    people: [],
  });

  function addEvent() {
    const createEvent = {
      id: generateUniqueID(),
      eventType: selectOption,
      name: newEvent.name,
      organizer: newEvent.organizer,
      eventImage: newEvent.eventImage || "https://loremflickr.com/640/480/",
      date: newEvent.date,
      people: [],
    };    
    handleAddEvent(createEvent);
  }

  function handleSelectChange(event) {
    setSelectOption(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    addEvent();
    resetEventForm();
  }

  function handleTextChange(event) {
    setNewEvent({
      ...newEvent,
      [event.target.id]: event.target.value,
    });
  }

  function resetEventForm() {
    setNewEvent({
      id: "",
      eventType: "",
      name: "",
      organizer: "",
      eventImage: "",
      date: "",
    });
    setSelectOption("");
  }

  function handleAddEvent(event) {
    setEvents([event, ...events]);
  }

  // function toggleEventAttendees() {
  //   setShowAttendees(!showAttendees);
  // }



  function updateEventAttendance(eventId, attendeeId) {
    const eventArray = [...events];
    const eventIndex = eventArray.findIndex((event) => eventId === event.id);
    const event = { ...eventArray[eventIndex] };
    const personIndex = event.people.findIndex(
      (person) => person.id === attendeeId
    );
    const peopleArray = [...event.people];
    peopleArray[personIndex].attendance = !peopleArray[personIndex].attendance;
    event.people = peopleArray;
    eventArray[eventIndex] = event;
    setEvents(eventArray);
  }

  return (
    <div className="App">
      <Header/>
      <main>
        <div className="new-event">
   
          < NewEventForm
          newEvent={newEvent}
          handleSubmit={handleSubmit}
          handleTextChange={handleTextChange}
          handleSelectChange={handleSelectChange}
          handleAddEvent={handleAddEvent}
           />

        </div>
        <div className="events">
        <ul>
          {events.map((event) => {
          const { people: attendees } = event;

      return (
        <Event
        key={event.id}
          event={event}
          updateEventAttendance={updateEventAttendance}
          attendees={attendees} 
          />
      );
    })}
  </ul>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
