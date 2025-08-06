import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Login from './pages/Login';
import EmployeeDashboard from './pages/EmployeeDashboard';
import AdminDashboard from './pages/AdminDashboard';
import BDDashboard from './pages/BDDashboard';
import FinanceDashboard from './pages/FinanceDashboard';
import ManagerDashboard from './pages/ManagerDashboard';
import ATSDashboard from './pages/ATSDashboard';
import ExitDashboard from './pages/ExitDashboard';
import ProtectedRoute from './routes/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';

const AppLayout = () => (
  <div className="flex min-h-screen bg-gray-100">
    <Sidebar />
    <div className="flex flex-1 flex-col">
      <Topbar />
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<AppLayout />}>
            <Route
              path="/employee/dashboard"
              element={
                <ProtectedRoute roles={['employee']}>
                  <EmployeeDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute roles={['admin']}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/bd/dashboard"
              element={
                <ProtectedRoute roles={['bd']}>
                  <BDDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/finance/dashboard"
              element={
                <ProtectedRoute roles={['finance']}>
                  <FinanceDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/manager/dashboard"
              element={
                <ProtectedRoute roles={['manager']}>
                  <ManagerDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/ats/dashboard"
              element={
                <ProtectedRoute roles={['ats']}>
                  <ATSDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/exit/dashboard"
              element={
                <ProtectedRoute roles={['exit']}>
                  <ExitDashboard />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
