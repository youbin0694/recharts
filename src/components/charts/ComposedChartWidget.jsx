import React from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ChartContainer from '../ChartContainer';
import { data } from '../../data/userData';

export default function ComposedChartWidget() {
  return (
    <ChartContainer 
      title="Composed Chart (복합 차트)" 
      description="막대와 선 그래프를 결합해 복합적인 데이터를 그립니다."
    >
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="방문자" barSize={20} fill="#8A2BE2" radius={[4, 4, 0, 0]} />
          <Line type="monotone" dataKey="가입자" stroke="#FFBB28" strokeWidth={3} activeDot={{ r: 8 }} />
        </ComposedChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
