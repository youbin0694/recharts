import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ChartContainer from '../ChartContainer';
import { data } from '../../data/userData';

export default function LineChartWidget() {
  return (
    <ChartContainer 
      title="Line Chart (선형 차트)" 
      description="부드러운 곡선으로 데이터의 시간에 따른 변화 추이를 보여줍니다."
    >
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="방문자" stroke="#00C49F" strokeWidth={3} activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="가입자" stroke="#FFBB28" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
