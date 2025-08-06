import { NavLink, Outlet } from 'react-router-dom';
import { Briefcase, Calendar, FileText, Settings, Send } from 'lucide-react';

// Navigation configuration for employee dashboard sub-pages
const navItems = [
  { to: 'overview', label: 'Overview', icon: Briefcase },
  { to: 'leave', label: 'Leave', icon: Calendar },
  { to: 'reports', label: 'Reports', icon: FileText },
  { to: 'settings', label: 'Settings', icon: Settings },
  { to: 'complaints', label: 'Complaints', icon: Send },
];

const EmployeeLayout = () => {
  return (
    <div className="flex flex-1 min-h-full">
      {/* Sub sidebar for employee specific pages */}
      <aside className="w-48 bg-white border-r">
        <nav className="flex flex-col p-2">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded hover:bg-gray-100 ${
                  isActive ? 'bg-gray-200 font-semibold' : ''
                }`
              }
            >
              <Icon size={18} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Content area for nested routes */}
      <div className="flex-1 p-4 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default EmployeeLayout;
