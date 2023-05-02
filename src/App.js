import { useState } from "react";
import eventsData from "./data";
import Event from "./Components/Event";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NewEventForm from "./Components/NewEventForm";

function App() {
  const [events, setEvents] = useState(eventsData);

  function handleAddEvent(event) {
    setEvents([event, ...events]);
  }

  return (
    <div className="App">
      <>
      <Header />
      </>
      <main>
        <div className="new-event">
          <>
          <NewEventForm handleAddEvent={handleAddEvent} />
          </>
        </div>
        <div className="events">
          <ul>
            {events.map((event) => {
              const { people: attendees } = event;

              return (
              <Event attendees={attendees} events={events} setEvents={setEvents} event={event}/>
              );
            })}
          </ul>
        </div>
      </main>
      <>
      <Footer />      
      </>
    </div>
  );
}

export default App;
