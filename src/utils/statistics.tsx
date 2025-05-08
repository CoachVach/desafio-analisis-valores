export type Stats = {
    mean: number;
    median: number;
    variance: number;
    stdDev: number;
    outOfSpec: number;
    values: number[]; 
    min: number;              
    max: number;
  };
  
  export function calculateStats(values: number[], min: number, max: number): Stats {
    // Filtrar valores fuera de rango
    const filteredValues = values.filter(v => v >= min && v <= max);
  
    // Si no hay valores válidos, retornar valores predeterminados
    if (filteredValues.length === 0) {
      return {
        mean: 0,
        median: 0,
        variance: 0,
        stdDev: 0,
        outOfSpec: values.length,
        values: values,
        min: min, 
        max: max
      };
    }
  
    // Realizar los cálculos con los valores filtrados
    const sorted = [...filteredValues].sort((a, b) => a - b);
    const mean = filteredValues.reduce((a, b) => a + b, 0) / filteredValues.length;
  
    const median =
      filteredValues.length % 2 === 0
        ? (sorted[filteredValues.length / 2 - 1] + sorted[filteredValues.length / 2]) / 2
        : sorted[Math.floor(filteredValues.length / 2)];
  
    const variance =
      filteredValues.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / filteredValues.length;
    const stdDev = Math.sqrt(variance);
  
    const outOfSpec = values.filter(v => v < min || v > max).length;
  
    return { mean, median, variance, stdDev, outOfSpec, values, min, max };
  }
  
  