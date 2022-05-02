import { useState } from 'react'
import './App.css';
import MiniCalendar from './components/MiniCalendar/MiniCalendar'
import { getToday, getYearMonthDay } from './components/MiniCalendar/moment-utils'
import AddApptForm from './components/AddApptForm/AddApptForm'


function App() {
  const [showAddAppt, setShowAddAppt] = useState(false);
  const [date, setDate] = useState(getToday());

  const toggleAppt = () => {
    setShowAddAppt(!showAddAppt);
  }

  return (
    <div className="App">
      <center>
          {showAddAppt ? <AddApptForm apptDate={getYearMonthDay(date)} toggleClose={toggleAppt}/> : null}
        </center>
      <header className="App-header">
        <div className="calendar-container">
          <MiniCalendar selectDate={date} setSelectDate={setDate}/>
          <button onClick={toggleAppt}>Schedule</button>
        </div>
      </header>
    </div>
  );
}

export default App;
