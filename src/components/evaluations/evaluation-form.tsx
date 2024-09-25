import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createEvaluation } from '@/services/api';

const schema = yup.object().shape({
  employeeId: yup.string().required('Employee ID is required'),
  score: yup
    .number()
    .required('Score is required')
    .min(1, 'Score must be at least 1')
    .max(5, 'Score must be at most 5'),
  comment: yup.string().required('Comment is required'),
});

const EvaluationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await createEvaluation(data);
      reset();
    } catch (error) {
      console.error('Failed to create evaluation', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Colaborador ID:</label>
        <input {...register('employeeId')} />
        {errors.employeeId && <p>{errors.employeeId.message}</p>}
      </div>

      <div>
        <label>Pontuação (1-5):</label>
        <input type="number" {...register('score')} />
        {errors.score && <p>{errors.score.message}</p>}
      </div>

      <div>
        <label>Detalhes:</label>
        <textarea {...register('comment')} />
        {errors.comment && <p>{errors.comment.message}</p>}
      </div>

      <button type="submit">Criar Monitoria</button>
    </form>
  );
};

export default EvaluationForm;
