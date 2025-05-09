import React, { useState, useEffect } from "react";

const activities = {
  "2025-05-10": "All Day - Flying",
  "2025-05-11": "4:55am - Land in Auckland, 1:40pm - 3:50pm Auckland - Melbourne QF152, 3:15pm - 5:25pm Auckland - Melbourne QF156",
  "2025-05-12": "11:00pm - Monday workday begins (9am NYC)",
  "2025-05-13": "7:00am - Monday workday ends (5pm NYC), 11:00pm - Tuesday workday begins (9am NYC)",
  "2025-05-14": "7:00am - Tuesday workday ends (5pm NYC), 11:00pm - Wednesday workday begins (9am NYC)",
  "2025-05-15": "7:00am - Wednesday workday ends (5pm NYC), 10:00am - Pick up rental car",
  "2025-05-16": "7:30am - Marlena lands on UA98 LA-MEL, 9:00am - Drive to Pomonal, 2:00pm - Check in to Airbnb",
  "2025-05-17": "9:00am - Hike The Pinnacle Loop, 2:00pm - Hike Hollow Mountain, 5:00pm - Return to Airbnb",
  "2025-05-18": "11:00am - Check out, 2:00pm - Check in Bendigo",
  "2025-05-19": "10:00am - Check out, 2:00pm - Check in Tawonga",
  "2025-05-20": "Hike Mt Feathertop via The Razorback 22.7km",
  "2025-05-21": "Hike Mt Bogong Loop trail 19.6km",
  "2025-05-22": "11:00am - Check out, 2:00pm - Check in Beechworth",
  "2025-05-23": "Giaconda Winery, Indigo Vineyard, Pennyweight, Baamurtha",
  "2025-05-24": "12:30pm - Lunch at The Stanley Pub",
  "2025-05-25": "Explore Beechworth, Dinner at Beechworth Brewery",
  "2025-05-26": "Check out, Drive to Canberra, 4:00pm - Check in Kingston Airbnb",
  "2025-05-27": "All Day - Kingston Airbnb, Canberra",
  "2025-05-28": "All Day - Kingston Airbnb, Canberra",
  "2025-05-29": "All Day - Kingston Airbnb, Canberra",
  "2025-05-30": "6:05am - Marlena flies CBR-MEL, 9:30am - Marlena flies MEL-LAX",
  "2025-05-31": "All Day - Kingston Airbnb, Canberra"
};

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [activity, setActivity] = useState(activities[selectedDate] || "No activity");

  useEffect(() => {
    setActivity(activities[selectedDate] || "No activity");
  }, [selectedDate]);

  return (
    <div className="flex">
      <aside className="aside">
        <h2>Select Date</h2>
        {Object.keys(activities).map((date) => (
          <button key={date} onClick={() => setSelectedDate(date)}>{date}</button>
        ))}
      </aside>
      <main className="main">
        <h1>Activity for {selectedDate}</h1>
        <p>{activity}</p>
      </main>
    </div>
  );
};

export default App;
