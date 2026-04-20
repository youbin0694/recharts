import React from 'react';
import './App.css';
import AdvancedFeatureChart from './components/advanced/AdvancedFeatureChart';
import ChartJsComparisonWidget from './components/charts/ChartJsComparisonWidget';
import AreaChartWidget from './components/charts/AreaChartWidget';
import BarChartWidget from './components/charts/BarChartWidget';
import ComposedChartWidget from './components/charts/ComposedChartWidget';
import LineChartWidget from './components/charts/LineChartWidget';
import PieChartWidget from './components/charts/PieChartWidget';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>📊 Recharts Dashboard</h1>
        <p>현대적인 디자인으로 만나는 아름다운 데이터 시각화 라이브러리</p>
      </header>

      <main className="dashboard-grid">
        <div style={{ gridColumn: '1 / -1' }}>
          <AdvancedFeatureChart />
        </div>
        <ChartJsComparisonWidget />
        <AreaChartWidget />
        <BarChartWidget />
        <LineChartWidget />
        <PieChartWidget />
        <ComposedChartWidget />
      </main>
    </div>
  );
}

export default App;
