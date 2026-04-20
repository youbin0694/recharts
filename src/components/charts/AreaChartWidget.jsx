import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import ChartContainer from '../ChartContainer';
import { data } from '../../data/userData';

export default function AreaChartWidget() {
  return (
    <ChartContainer 
      title="Area Chart (영역 차트)" 
      description="색칠된 영역으로 전체적인 흐름과 양을 한눈에 파악합니다."
    >
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8A2BE2" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8A2BE2" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="방문자" stroke="#8A2BE2" strokeWidth={3} fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
