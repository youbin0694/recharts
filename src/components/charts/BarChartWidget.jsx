import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { data } from '../../data/userData';
import ChartContainer from '../ChartContainer';

export default function BarChartWidget() {
  return (
    <ChartContainer
      title="Bar Chart (막대 차트)"
      description="월별 방문자와 가입자 수의 크기를 직관적으로 비교합니다."
    >
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }} />
          <Legend wrapperStyle={{ color: '#a0a0a0' }} />
          <Bar dataKey="방문자" fill="#00C49F" radius={[4, 4, 0, 0]} />
          <Bar dataKey="가입자" fill="#FFBB28" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
