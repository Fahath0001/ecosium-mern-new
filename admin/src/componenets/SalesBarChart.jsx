import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function getLast7Dates() {
  const dates = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);

    const formatted = d.toISOString().split("T")[0]; // YYYY-MM-DD

    dates.push({
      date: formatted,
      sales: Math.floor(Math.random() * 300) + 50, // replace later with real data
    });
  }
  return dates;
}

export default function SalesBarChart() {
  const data = getLast7Dates();

  return (
    <div className="w-[500px] h-[400px] p-2 bg-white shadow-md rounded-2xl">
      <h2 className="text-xl font-bold">Last 7 Days Sales</h2>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" className="mt-2" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="#38b6ff" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
