import React, { useEffect } from 'react';
import { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import { FaLocationDot } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa6';
import axios from 'axios';

const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [pins, setPins] = useState([]);

  useEffect(() => {
    const getPins = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/pin');
        console.log('Response data:', res.data); // Log the response data
        let data;
        if (typeof res.data === 'string') {
          // Parse the string to JSON
          data = JSON.parse(res.data);
        } else {
          data = res.data;
        }
        console.log('Parsed data:', data); // Log the parsed data
        if (Array.isArray(data)) {
          setPins(data);
        } else {
          console.error('Unexpected response format:', data);
          setPins([]); // Fallback to empty array
        }
      } catch (error) {
        console.error('Error fetching pins:', error);
        setPins([]); // Fallback to empty array
      }
    };
    getPins();
  }, []);

  return (
    <div>
      <Map
        mapboxAccessToken="pk.eyJ1IjoicHJhandhbDAyMyIsImEiOiJjbTc0OXNueHQwNmpyMnFyMjZtbWVhZDQ5In0.xAvStKWoUeKfR_xFR8IB6w"
        initialViewState={{
          longitude: 74.798271,
          latitude: 12.99464,
          zoom: 4,
        }}
        style={{ width: '100vw', height:'100vh' }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        {pins.map((p) => (
          <div key={p._id}>
            <Marker longitude={p.long} latitude={p.lat} anchor="bottom">
              <FaLocationDot className="text-4xl text-indigo-900" />
            </Marker>
            {showPopup && (
              <Popup longitude={p.long} latitude={p.lat} anchor="left">
                <div className="flex flex-col gap-3 w-52 p-2">
                  <h1>
                    Username: <span>{p.username}</span>
                  </h1>
                  <h1>
                    Title: <span>{p.title}</span>
                  </h1>
                  <div>
                    <h5>Description</h5>
                    <p>{p.desc}</p>
                  </div>
                  <h1>
                    Rating: {p.rating}
                    <div className="flex">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </h1>
                  <p>1 hr ago</p>
                </div>
              </Popup>
            )}
          </div>
        ))}
      </Map>
    </div>
  );
};

export default App;
