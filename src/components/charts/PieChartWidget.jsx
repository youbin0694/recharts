import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { COLORS, pieData } from '../../data/userData';
import ChartContainer from '../ChartContainer';

export default function PieChartWidget() {
  return (
    <ChartContainer
      title="Pie Chart (원형 차트)"
      description="기기별 접속 환경과 같은 비율 데이터를 한눈에 확인합니다."
    >
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            innerRadius={60} // 안쪽 원
            outerRadius={100} // 바깥 원
            paddingAngle={5} // 조각사이 여백
            dataKey="value"
            stroke="none"
          >
            {pieData.map((entry, index) => ( // 조각별 색상 다르게
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
