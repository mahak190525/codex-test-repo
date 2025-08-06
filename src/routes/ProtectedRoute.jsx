import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ roles, children }) => {
  const { user } = useAuth();
  if (!user || (roles && !roles.includes(user.role))) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
