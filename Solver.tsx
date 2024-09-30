import React, { useState } from 'react';
import { evaluate, derivative } from 'mathjs';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Enregistre les composants nécessaires à Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const EquationSolver: React.FC = () => {
  const [equation, setEquation] = useState<string>('x^2');  // Valeur par défaut
  const [range, setRange] = useState<number>(10);
  const [graphData, setGraphData] = useState<any>(null);

  // Fonction pour résoudre l'équation et générer les points de données
  const solveEquation = () => {
    const data = {
      labels: [] as number[],  // Les valeurs d'axe X
      datasets: [
        {
          label: `Graph of ${equation}`,
          data: [] as number[],  // Les valeurs d'axe Y
          fill: false,
          borderColor: 'rgba(75,192,192,1)',
          tension: 0.1
        }
      ]
    };

    for (let x = -range; x <= range; x += 0.1) {
      try {
        const y = evaluate(equation, { x });
        data.labels.push(parseFloat(x.toFixed(2)));  // Axe X
        data.datasets[0].data.push(y);  // Axe Y
      } catch (error) {
        console.error(`Error evaluating equation at x=${x}: `, error);
      }
    }

    setGraphData(data);
  };

  return (
    <div>
      <h1>Math Equation Solver</h1>
      <div>
        <label>Enter Equation: </label>
        <input
          type="text"
          value={equation}
          onChange={(e) => setEquation(e.target.value)}
          placeholder="e.g., x^2 + 2x + 1"
        />
      </div>
      <div>
        <label>Range (from -range to +range): </label>
        <input
          type="number"
          value={range}
          onChange={(e) => setRange(Number(e.target.value))}
        />
      </div>
      <button onClick={solveEquation}>Solve and Plot</button>
      
      {graphData && (
        <div>
          <h2>Graph of {equation}</h2>
          <Line data={graphData} />
        </div>
      )}
    </div>
  );
};

export default EquationSolver;
