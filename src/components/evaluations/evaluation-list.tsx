import { useState, useEffect } from 'react';
import { getEvaluations } from '@/services/api';

const EvaluationList = ({ access }) => {
  const [evaluations, setEvaluations] = useState([]);

  useEffect(() => {
    const fetchEvaluations = async () => {
      const data = await getEvaluations(access);
      setEvaluations(data);
    };

    fetchEvaluations();
  }, [access]);

  return (
    <div>
      <h2>Evaluations</h2>
      {evaluations.length === 0 ? (
        <p>Nenhuma monitoria disponível.</p>
      ) : (
        <ul>
          {evaluations.map((evaluation) => (
            <li key={evaluation.id}>
              <a href={`/evaluation/${evaluation.id}`}>
                {evaluation.name} - {evaluation.date}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EvaluationList;
