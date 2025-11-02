import React, { useState } from "react";
import WorkoutForm from "./WorkoutForm";
import WorkoutList from "./WorkoutList";
import FilterButtons from "./FilterButtons";

export default function App() {
  const [filterUrl, setFilterUrl] = useState("http://localhost:8080/api/workouts");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Edzésnapló</h1>
        <WorkoutForm />
        <FilterButtons setFilterUrl={setFilterUrl} />
        <WorkoutList url={filterUrl} />
      </div>
    </div>
  );
}
