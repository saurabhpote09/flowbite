import React from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const LineChartCard = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <CartesianGrid stroke="#2a3b4c" />
      <XAxis dataKey="date" tick={{ fill: "#9aa5b1" }} />
      <YAxis tick={{ fill: "#9aa5b1" }} />
      <Tooltip />
      <Legend iconType="circle" wrapperStyle={{ paddingTop: "20px", color: "#9aa5b1" }} />
      <Line
        type="monotone"
        dataKey="current"
        stroke="#0044ff"
        strokeWidth={3}
        dot={{ r: 5, stroke: "#0044ff", strokeWidth: 2, fill: "#1a2b3c" }}
        activeDot={{ r: 6 }}
        name="Revenue"
      />
      <Line
        type="monotone"
        dataKey="previous"
        stroke="#ffad80"
        strokeWidth={3}
        dot={{ r: 5, stroke: "#ffad80", strokeWidth: 2, fill: "#1a2b3c" }}
        activeDot={{ r: 6 }}
        name="Revenue (previous period)"
      />
    </LineChart>
  </ResponsiveContainer>
  )
}

export default LineChartCard