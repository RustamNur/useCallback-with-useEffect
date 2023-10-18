import { useCallback, useEffect, useState } from "react";
import "./TripList.css";

const TripList = () => {
  const [trips, setTrips] = useState([]);
    const [url, setUrl] = useState("http://localhost:3000/trips");
    
    const fetchTrips = useCallback(async () => {
        const req = await fetch(url)
        const data = await req.json()
        setTrips(data)
    },[url])

    useEffect(() => {
        fetchTrips()
    },[fetchTrips])
 
  console.log(trips);
  return (
    <div className="trip-list">
      <h5>Trips</h5>
      <ul>
        {trips.map((trip) => {
          return (
            <li key={trip.title}>
              <h6>{trip.title}</h6>
              <p>{trip.price}</p>
              <p>{trip.loc}</p>
            </li>
          );
        })}
      </ul>
      <div className="filters">
        <button
          onClick={() => setUrl("http://localhost:3000/trips?loc=European")}
        >
          Eurpean
        </button>
        <button onClick={() => setUrl("http://localhost:3000/trips")}>
          All trips
        </button>
      </div>
    </div>
  );
};

export default TripList;
