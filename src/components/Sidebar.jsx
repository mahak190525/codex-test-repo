import {
  Home,
  Settings,
  Calendar,
  FileText,
  Send,
  Users,
  CalendarRange,
  Monitor,
  Briefcase,
  Settings as SettingsIcon,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';

// Role based navigation configuration. Each role lists all available panels in sidebar
const roleNav = {
  employee: [
    { to: '/employee/dashboard/overview', label: 'Overview', icon: Briefcase },
    { to: '/employee/dashboard/leave', label: 'Leave', icon: Calendar },
    { to: '/employee/dashboard/reports', label: 'Reports', icon: FileText },
    { to: '/employee/dashboard/settings', label: 'Settings', icon: SettingsIcon },
    { to: '/employee/dashboard/complaints', label: 'Complaints', icon: Send },
  ],
  admin: [
    { to: '/admin/dashboard', label: 'Dashboard', icon: Home },
    { to: '/admin/employees', label: 'Employees', icon: Users },
    { to: '/admin/attendance', label: 'Attendance', icon: CalendarRange },
    { to: '/admin/assets', label: 'Assets', icon: Monitor },
  ],
  bd: [{ to: '/bd/dashboard', label: 'Dashboard', icon: Home }],
  finance: [{ to: '/finance/dashboard', label: 'Dashboard', icon: Home }],
  manager: [{ to: '/manager/dashboard', label: 'Dashboard', icon: Home }],
  ats: [{ to: '/ats/dashboard', label: 'Dashboard', icon: Home }],
  exit: [{ to: '/exit/dashboard', label: 'Dashboard', icon: Home }],
};

const Sidebar = () => {
  const { user } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  const items = user ? roleNav[user.role] || [] : [];

  return (
    <aside className={`bg-gray-800 text-white ${collapsed ? 'w-16' : 'w-64'} transition-all min-h-screen`}>
      <button className="p-2" onClick={() => setCollapsed(!collapsed)}>
        <Settings size={20} />
      </button>
      <nav className="mt-4">
        {items.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
            }
          >
            <Icon size={20} />
            {!collapsed && <span>{label}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
