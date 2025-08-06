import { Home, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';

const roleNav = {
  employee: [{ to: '/employee/dashboard/overview', label: 'Dashboard', icon: Home }],
  admin: [{ to: '/admin/dashboard', label: 'Dashboard', icon: Home }],
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
          <Link key={to} to={to} className="flex items-center gap-2 p-2 hover:bg-gray-700">
            <Icon size={20} />
            {!collapsed && <span>{label}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
