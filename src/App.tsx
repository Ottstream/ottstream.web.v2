import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import '@/App.css';
import reactLogo from 'Assets/react.svg';
import viteLogo from 'Assets/vite.svg';

function App() {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>{t('auth')}</p>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count i s {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
