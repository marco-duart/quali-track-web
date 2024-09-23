import useAuth from '../../../hooks/use-auth';
import DashboardLayout from '../../../components/common/layouts/dashboard-layout';

const AdminDashboard = () => {
  const { session } = useAuth(['admin']);

  return (
    <DashboardLayout>
      <h1>Admin Dashboard</h1>
    </DashboardLayout>
  );
};

export default AdminDashboard;
