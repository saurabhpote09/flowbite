import React from 'react'
import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts'

const BarChartCard = ({data}) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data}>
      <Tooltip cursor={{ fill: "rgba(255, 255, 255, 0.2)" }} />
      <Bar dataKey="uv" fill="#ff9f68" barSize={5} />
      <Bar dataKey="pv" fill="#0097e6" barSize={5} />
    </BarChart>
  </ResponsiveContainer>
  )
}

export default BarChartCard