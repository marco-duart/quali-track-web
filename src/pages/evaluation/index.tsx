import useAuth from '../../hooks/use-auth';
import EvaluationList from '../../components/evaluations/evaluation-list';
import EvaluationForm from '../../components/evaluations/evaluation-form';

const EvaluationPage = () => {
  const { session } = useAuth(['monitor', 'manager', 'employee']);

  if (!session) return <p>Loading...</p>;

  const role = session.user.role;

  return (
    <div>
      
      <main>
        {role === 'monitor' && <MonitorEvaluation />}
        {role === 'manager' && <ManagerEvaluation />}
        {role === 'employee' && <EmployeeEvaluation />}
      </main>
    </div>
  );
};

const MonitorEvaluation = () => (
  <div>
    <EvaluationForm />
    <EvaluationList access="all" />
  </div>
);

const ManagerEvaluation = () => (
  <div>
    <EvaluationList access="team" />
  </div>
);

const EmployeeEvaluation = () => (
  <div>
    <EvaluationList access="self" />
  </div>
);

export default EvaluationPage;
