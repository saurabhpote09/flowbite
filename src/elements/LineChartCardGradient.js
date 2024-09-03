import React from 'react'
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'

const LineChartCardGradient = ({data}) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0044ff" stopOpacity={1} />
          <stop offset="100%" stopColor="#0044ff" stopOpacity={0.2} />
        </linearGradient>
      </defs>
      <Tooltip />
      <Line
        type="monotone"
        dataKey="value"
        stroke="#0044ff"
        strokeWidth={4}
        fill="url(#gradient)"
        dot={false}
        isAnimationActive={false}
      />
    </LineChart>
  </ResponsiveContainer>
  )
}

export default LineChartCardGradient