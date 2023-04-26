import { useState } from "react";
import eventsData from "./data";
import NewEventForm from "./Components/NewEventForm";
import Event from "./Components/Event";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  const [events, setEvents] = useState(eventsData);

  function handleAddEvent(event) {
    setEvents([event, ...events]);
  }

  return (
    <div className="App">
      <Header />
      <main>
        <NewEventForm handleAddEvent={handleAddEvent} />
        <Event events={events} setEvents={setEvents} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
