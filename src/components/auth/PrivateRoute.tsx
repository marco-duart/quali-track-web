import { Navigate } from "react-router-dom";
import { useUserContext } from "../../hooks/use-user-context";

type PrivateRouteProps = {
  children: React.ReactNode;
  redirectTo: string;
};

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  redirectTo,
}) => {
  const { user } = useUserContext();

  return user ? (
    children
  ) : (
    <Navigate to={redirectTo} />
  );
};
