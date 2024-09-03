import React from 'react'
import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts'

const BarChartStacked = ({ data }) => {
    const dataWithRemaining = data.map(item => ({
        ...item,
        remaining: 100 - item.value,
      }));
  return (
    <ResponsiveContainer width="100%" height={300}>
    <BarChart data={dataWithRemaining}>
      <Tooltip />
      <Bar dataKey="value" stackId="a" fill="#0044ff" barSize={10} />
      <Bar dataKey="remaining" stackId="a" fill="#2a3b4c" barSize={10} />
    </BarChart>
  </ResponsiveContainer>
  )
}

export default BarChartStacked