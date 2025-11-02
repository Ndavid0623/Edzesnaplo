import React, { useEffect, useState } from "react";
import axios from "axios";

export default function WorkoutList({ url }) {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => setWorkouts(res.data));
  }, [url]);

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th>Dátum</th><th>Típus</th><th>Gyakorlat</th><th>Időtartam</th><th>Megjegyzés</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((w) => (
            <tr key={w.id} className="border-b hover:bg-gray-50">
              <td>{w.date}</td><td>{w.type}</td><td>{w.exercise}</td><td>{w.duration} perc</td><td>{w.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
