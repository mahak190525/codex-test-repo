import { Outlet } from 'react-router-dom';

// Simple wrapper for employee pages now that all panels live in main sidebar
const EmployeeLayout = () => {
  return <Outlet />;
};

export default EmployeeLayout;
