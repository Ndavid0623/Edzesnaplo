export default function FilterButtons({ setFilterUrl }) {
  return (
    <div className="flex flex-wrap gap-2 mb-6 justify-center">
      <button onClick={() => setFilterUrl("http://localhost:8080/api/workouts")} className="bg-gray-300 px-4 py-2 rounded">Összes</button>
      <button onClick={() => setFilterUrl("http://localhost:8080/api/workouts/type/strength")} className="bg-green-400 px-4 py-2 rounded">Erősítő</button>
      <button onClick={() => setFilterUrl("http://localhost:8080/api/workouts/date/2025-10-21")} className="bg-blue-400 px-4 py-2 rounded">Mai</button>
      <button onClick={() => setFilterUrl("http://localhost:8080/api/workouts/min-duration/60")} className="bg-yellow-400 px-4 py-2 rounded">60+ perc</button>
    </div>
  );
}
