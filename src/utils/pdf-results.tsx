import jsPDF from 'jspdf';
import type { Stats } from './statistics';

export function generateResultsPDF(results: Stats) {
  const doc = new jsPDF();

  const now = new Date();
  const fecha = now.toLocaleDateString();
  const hora = now.toLocaleTimeString();

  // Título principal
  doc.setFontSize(16);
  doc.text('Resultados del Análisis de Valores', 10, 20);

  // Fecha y hora
  doc.setFontSize(10);
  doc.text(`Fecha: ${fecha}  Hora: ${hora}`, 10, 30);

  // Contenido estadístico
  doc.setFontSize(12);
  doc.text(`Promedio: ${results.mean.toFixed(2)}`, 10, 50);
  doc.text(`Mediana: ${results.median}`, 10, 60);
  doc.text(`Varianza: ${results.variance.toFixed(2)}`, 10, 70);
  doc.text(`Desviación estándar: ${results.stdDev.toFixed(2)}`, 10, 80);
  doc.text(`Valores fuera de especificación: ${results.outOfSpec}`, 10, 90);

  // Nota
  doc.setFontSize(10);
  doc.text('*Solo se consideran los valores dentro del rango.', 10, 110);

  // Descargar
  doc.save('analisis-valores.pdf');
}
