import React from 'react';
import { YAxis } from 'recharts';

// [4. 컴포넌트 재사용] 
// 여러 차트에서 똑같이 사용될 Y축 스타일을 미리 정의해두고, 가져다 씁니다.
export const CommonYAxis = (props) => (
  <YAxis width={60} {...props} />
);

// [4. 컴포넌트 재사용] & [2. 관심사의 분리]
// 툴팁의 경우 단순히 렌더링 로직이 복잡해질 수 있으므로, 별개의 컴포넌트로 분리합니다.
export const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: '#2b2b36', padding: '15px', borderRadius: '12px', color: '#fff', border: '1px solid #4a4a5a', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
        <h4 style={{ margin: '0 0 10px 0', borderBottom: '1px solid #4a4a5a', paddingBottom: '5px' }}>{label} 리포트</h4>
        {payload.map((entry, index) => (
          <div key={index} style={{ marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: entry.color, borderRadius: '50%' }}></span>
            <span style={{ color: '#ccc' }}>{entry.name}:</span>
            <span style={{ fontWeight: 'bold', color: entry.color }}>{entry.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};
