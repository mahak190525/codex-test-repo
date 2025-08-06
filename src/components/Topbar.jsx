import { Bell, User, ChevronDown } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Topbar = () => {
  const { logout } = useAuth();
  return (
    <header className="flex justify-end items-center bg-white border-b px-4 h-12">
      <div className="flex items-center gap-4">
        <Bell size={20} />
        <div className="relative group">
          <button className="flex items-center gap-1">
            <User size={20} />
            <ChevronDown size={16} />
          </button>
          <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg hidden group-hover:block">
            <button onClick={logout} className="w-full text-left px-4 py-2 hover:bg-gray-100">Logout</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
