import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const roles = [
  { value: 'employee', label: 'Employee' },
  { value: 'admin', label: 'HR/Admin' },
  { value: 'bd', label: 'Business Development' },
  { value: 'finance', label: 'Finance' },
  { value: 'manager', label: 'Manager' },
  { value: 'ats', label: 'Candidate' },
  { value: 'exit', label: 'Exiting Employee' },
];

const roleToPath = {
  employee: '/employee/dashboard/overview',
  admin: '/admin/dashboard',
  bd: '/bd/dashboard',
  finance: '/finance/dashboard',
  manager: '/manager/dashboard',
  ats: '/ats/dashboard',
  exit: '/exit/dashboard',
};

const Login = () => {
  const [role, setRole] = useState('employee');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(role);
    navigate(roleToPath[role]);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80 space-y-4">
        <h1 className="text-xl font-bold text-center">Login</h1>
        <div>
          <label htmlFor="role" className="block mb-1 text-sm font-medium">Select Role</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full border p-2 rounded"
          >
            {roles.map((r) => (
              <option key={r.value} value={r.value}>{r.label}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
      </form>
    </div>
  );
};

export default Login;
