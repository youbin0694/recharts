import { useState } from 'react';
import { Bar, CartesianGrid, ComposedChart, Legend, Line, ReferenceLine, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import ChartContainer from '../ChartContainer';
import { CommonYAxis, CustomTooltip } from './CustomGraphComponents';

// [7. 데이터 바인딩] 서버에서 넘어오는 다양한 데이터 셋을 쉽게 끼워넣기 위한 예시
const datasetA = [
  { name: '1주차', 판매량: 4000, 방문자: 2400 },
  { name: '2주차', 판매량: 3000, 방문자: 1398 },
  { name: '3주차', 판매량: 2000, 방문자: 9800 },
  { name: '4주차', 판매량: 2780, 방문자: 3908 },
];

const datasetB = [
  { name: '1주차', 판매량: 8000, 방문자: 9200 },
  { name: '2주차', 판매량: 5200, 방문자: 4800 },
  { name: '3주차', 판매량: 7300, 방문자: 6500 },
  { name: '4주차', 판매량: 9900, 방문자: 7500 },
];


export default function AdvancedFeatureChart() {
  // [5. 직관적인 기능 On/Off] & [6. 사용자 인터랙션 대응]을 위한 State
  const [useDatasetB, setUseDatasetB] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [showGrid, setShowGrid] = useState(true);
  const [showAvgLine, setShowAvgLine] = useState(false);

  // [7. 데이터 바인딩] State의 변경에 따라 결합된 데이터를 즉시 반응시킴
  const activeData = useDatasetB ? datasetB : datasetA;
  const avgSales = activeData.reduce((acc, cur) => acc + cur.판매량, 0) / activeData.length;

  return (
    <ChartContainer
      title="💡 Recharts 종합 기능 예제 (선언형+컴포넌트형)"
    >
      {/* 사용자 인터랙션을 위한 버튼 컨트롤 패널 */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
        <button
          className="feature-btn"
          onClick={() => setShowTooltip(!showTooltip)}
          style={{ backgroundColor: showTooltip ? '#8A2BE2' : '#333' }}
        >
          {showTooltip ? '✨ 툴팁 켜짐' : '툴팁 꺼짐'}
        </button>
        <button
          className="feature-btn"
          onClick={() => setShowGrid(!showGrid)}
          style={{ backgroundColor: showGrid ? '#00C49F' : '#333' }}
        >
          {showGrid ? '그리드 켜짐' : '그리드 꺼짐'}
        </button>
        <button
          className={`feature-btn ${showAvgLine ? 'black-text' : ''}`}
          onClick={() => setShowAvgLine(!showAvgLine)}
          style={{ backgroundColor: showAvgLine ? '#FFBB28' : '#333' }}
        >
          {showAvgLine ? '📈 판매량 평균선 켜짐' : '판매량 평균선 끄기'}
        </button>
        <button
          className="feature-btn"
          onClick={() => setUseDatasetB(!useDatasetB)}
          style={{ backgroundColor: '#e74c3c' }}
        >
          🔄 데이터 변경 ({useDatasetB ? 'B 세트' : 'A 세트'})
        </button>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        {/* [1. 설정 중심에서 구조 중심으로] <ComposedChart> 안에 필요한 것들을 직관적으로 배치 */}
        <ComposedChart data={activeData} margin={{ top: 20, right: 20, bottom: 20, left: 10 }}>

          {/* [5. 직관적인 기능 On/Off] JSX의 조건부 렌더링 활용 */}
          {showGrid && <CartesianGrid vertical={false} />}

          {/* [2. 관심사의 분리] 축은 XAxis, YAxis가 단독으로 모양과 로직을 분리해 관리 */}
          <XAxis dataKey="name" />

          {/* [4. 컴포넌트 재사용] 분리해둔 공통 YAxis 컴포넌트를 활용 */}
          <CommonYAxis />

          {/* [5. 직관적인 기능 On/Off] & [4. 컴포넌트 재사용] CustomTooltip 주입 */}
          {showTooltip && (
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
          )}

          <Legend wrapperStyle={{ paddingTop: '20px' }} />

          {/* 
            [2. 관심사의 분리] Bar와 Line 컴포넌트가 각자의 데이터 그리기 역할만 전담 
            [1. 설정 중심에서 구조 중심으로] 옵션 덩어리가 아니라 태그 형태라서 가독성이 뛰어납니다 
          */}
          <Bar dataKey="판매량" barSize={30} fill="#8A2BE2" radius={[4, 4, 0, 0]} animationDuration={500} />
          <Line type="monotone" dataKey="방문자" stroke="#FFBB28" strokeWidth={3} activeDot={{ r: 8 }} animationDuration={500} />

          {/* 
            [3. 조합의 자유도] & [6. 사용자 인터랙션 대응] 
            평균선을 뜻하는 ReferenceLine을 라이브러리가 강제하는 틀 대신, 필요에 따라 컴포넌트로 얹기만 하면 됩니다.
          */}
          {showAvgLine && (
            <ReferenceLine
              y={avgSales}
              label={{ position: 'top', value: `평균 판매량 (${avgSales.toLocaleString()})`, fill: '#00C49F', fontSize: 13, fontWeight: 'bold' }}
              stroke="#00C49F"
              strokeDasharray="4 4"
              strokeWidth={2}
            />
          )}

        </ComposedChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
