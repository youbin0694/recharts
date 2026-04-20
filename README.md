# 📊 Recharts & Chart.js Demo Dashboard

React 환경에서 선언형 데이터 시각화를 제공하는 `Recharts` 라이브러리와, 전통적인 방식인 객체 설정(Config) 기반의 `Chart.js` 라이브러리를 직접 비교하고 실습할 수 있도록 구성된 데모 프로젝트입니다.

---

## 🚀 사전 요구사항 (Prerequisites)

이 프로젝트는 최신 버전의 `Vite` 및 `Recharts` 패키지를 사용하므로, **Node.js 버전 18 이상**이 반드시 필요합니다. *(추천 버전: Node.js `v20.x` 이상)*

만약 터미널에서 Node 버전 관리를 위해 NVM을 사용 중이시라면 아래 명령어로 호환되는 버전을 선택해 주세요.
```bash
nvm use 20
```

---

## 📦 설치 및 실행 방법

### 1. 패키지(의존성) 설치
터미널에서 프로젝트 폴더(`.../recharts-demo`)에 위치한 상태로 아래의 명령어를 입력해 필요한 라이브러리들을 설치합니다.
```bash
npm install
```

**[ 💡 참고 - 설치되는 핵심 라이브러리 ]**
현재 프로젝트의 `package.json`에 이미 아래 패키지들이 모두 기록되어 있기 때문에, **단순히 `npm install` 명령어 한 줄만 실행하셔도 아래 패키지들이 전부 한 번에 자동 설치됩니다!**

만약 아무것도 없는 빈 프로젝트에서 직접 하나씩 설치해보고 싶으시다면 아래의 개별 설치 명령어들을 참고하세요.

- **React & Vite (초기 프로젝트 생성 시 자동 포함)**: `npm create vite@latest my-app -- --template react`
- **Recharts (메인 라이브러리)**: `npm install recharts`
- **Chart.js (비교용 라이브러리)**: `npm install chart.js react-chartjs-2`

### 2. 로컬 개발 서버 실행
설치가 완료되었다면, 다음 명령어로 로컬 서버를 가동합니다.
```bash
npm run dev
```

서버가 켜지면 터미널 창에 접속 가능한 URL(보통 `http://localhost:5173/`)이 표시됩니다. 브라우저 주소창에 해당 URL을 입력하시면 차트 대시보드를 직접 테스트하실 수 있습니다.

---

## 🧑‍💻 주요 기능 설명

- **Advanced Feature Chart (`AdvancedFeatureChart.jsx`)** :
  대시보드 상단에 위치하며 툴팁, 그리드 켜기/끄기, 데이터 동적 변경 등 Recharts가 지니는 컴포넌트 재사용 및 선언적 문법의 강점을 종합적으로 모아둔 반응형 컨트롤러입니다.
- **Chart.js Comparison Widget (`ChartJsComparisonWidget.jsx`)** :
  거대하고 복잡한 하나의 `options` 객체를 만들어서 넘겨야만 동작하는 Chart.js의 코드를 통해, 두 라이브러리의 철학 차이를 체감할 수 있는 비교군 컴포넌트입니다.
- **기본 차트 모듈들** :
  `AreaChart`, `BarChart`, `LineChart`, `PieChart`, `ComposedChart`의 기본적인 작성법들을 개별 위젯 컴포넌트로 분리해 가독성을 높였습니다.

---

  ## 결과
<img width="925" height="1597" alt="image" src="https://github.com/user-attachments/assets/7ac437c8-9b03-457c-95fe-0323606bd088" />



