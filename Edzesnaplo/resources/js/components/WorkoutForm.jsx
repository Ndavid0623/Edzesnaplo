import React, { useState } from "react";
import axios from "axios";

export default function WorkoutForm() {
  const [form, setForm] = useState({ date: "", type: "", exercise: "", duration: "", notes: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/workouts", form);
    alert("Edzés elmentve!");
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-2 mb-6">
      {["date", "type", "exercise", "duration", "notes"].map((field) => (
        <input
          key={field}
          type={field === "date" ? "date" : "text"}
          placeholder={field}
          value={form[field]}
          onChange={(e) => setForm({ ...form, [field]: e.target.value })}
          className="border rounded p-2"
        />
      ))}
      <button className="col-span-2 bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Mentés</button>
    </form>
  );
}
