import { useState } from 'react';
import LimitsForm from './components/LimitsForm';
import ValueInput from './components/ValueInput';
import ValuesList from './components/ValuesList';
import ResultsPanel from './components/ResultsPanel';
import { calculateStats } from './utils/statistics';
import type { Stats } from './utils/statistics';
import './styles/App.css';

function App() {
  const [limits, setLimits] = useState<{ min: number | ''; max: number | '' }>({ min: '', max: '' });
  const [values, setValues] = useState<number[]>([]);
  const [results, setResults] = useState<Stats | null>(null);

  const handleCalculate = () => {
    if (limits.min === '' || limits.max === '' || limits.min >= limits.max) {
      alert("Ingresá límites válidos (inferior < superior)");
      return;
    }
    if (!values.length) {
      alert("Ingresá al menos un valor");
      return;
    }

    const stats = calculateStats(values, limits.min, limits.max);
    setResults(stats);
  };

  return (
    <div className="container">
      <h1>Análisis de Valores</h1>
      <LimitsForm limits={limits} setLimits={setLimits} />
      <ValueInput values={values} setValues={setValues} />
      <ValuesList values={values} setValues={setValues} />
      <button className="calculate" onClick={handleCalculate}>Calcular</button>
      {results && <ResultsPanel results={results} />}
    </div>
  );
}

export default App;
