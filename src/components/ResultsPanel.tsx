import type { Stats } from '../utils/statistics';
import { generateResultsPDF } from '../utils/pdf-results';

type Props = {
  results: Stats;
};

function ResultsPanel({ results }: Props) {
  return (
    <div className="results-panel">
    <h2 style={{ margin: 0 }}>Resultados:</h2>
      <ul>
        <li>Promedio: {results.mean.toFixed(2)}</li>
        <li>Mediana: {results.median}</li>
        <li>Varianza: {results.variance.toFixed(2)}</li>
        <li>Desviación estándar: {results.stdDev.toFixed(2)}</li>
        <li>Valores fuera de especificación: {results.outOfSpec}</li>
      </ul>
      <p>*Solo tenemos en cuenta los valores en el rango establecido.</p>
      <button onClick={() => generateResultsPDF(results)}>Descargar PDF</button>
    </div>
  );
}

export default ResultsPanel;
