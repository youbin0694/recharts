import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { data } from '../../data/userData';
import ChartContainer from '../ChartContainer';

// Chart.js는 사용하려는 구성 요소를 전역적으로 등록해 주어야 합니다.
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartJsComparisonWidget() {
  // [비교 포인트!] 
  // Chart.js는 모든 것을 하나의 거대한 `options` 객체 안에서 설정합니다.
  // 객체의 깊이가 깊어지고, 어디에 어떤 설정이 숨어있는지 문서를 계속 찾아야 합니다.
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: { color: '#a0a0a0' }
      },
      tooltip: {
        backgroundColor: '#2b2b36',
        titleColor: '#fff',
        bodyColor: '#ccc',
        borderColor: '#4a4a5a',
        borderWidth: 1,
        padding: 10,
      }
    },
    scales: {
      y: {
        grid: { color: '#ffffff20', drawBorder: false },
        ticks: { color: '#a0a0a0' }
      },
      x: {
        grid: { display: false },
        ticks: { color: '#a0a0a0' }
      }
    }
  };

  // 데이터 형식도 라이브러리가 정해둔 고정된 규격에 맞춰 변환해 줘야 합니다.
  // (Recharts는 원본 배열을 그대로 넘기고 dataKey만 지정하면 됨)
  const chartData = {
    labels: data.map(item => item.name),
    datasets: [
      {
        label: '방문자',
        data: data.map(item => item.방문자),
        backgroundColor: '#00C49F',
        borderRadius: 4,
      },
      {
        label: '가입자',
        data: data.map(item => item.가입자),
        backgroundColor: '#FFBB28',
        borderRadius: 4,
      },
    ],
  };

  return (
    <ChartContainer
      title="Chart.js"
      description="거대한 options 객체에 모든 스타일 옵션을 밀어 넣는 방식입니다. Recharts의 선언형 JSX 태그 방식과 비교해 보세요."
    >
      <div style={{ width: '100%', height: '300px' }}>
        {/* 모든 설정을 객체로 만들어 props로 던지기만 합니다. 내부에 축, 범례가 있는지 직관적으로 보이지 않습니다. */}
        <Bar options={options} data={chartData} />
      </div>
    </ChartContainer>
  );
}
