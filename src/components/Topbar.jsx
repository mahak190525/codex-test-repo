import { Bell, User, ChevronDown } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useState, useRef, useEffect } from 'react';

const Topbar = () => {
  const { logout } = useAuth();
  const [open, setOpen] = useState(false); // dropdown visibility
  const ref = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <header className="flex justify-end items-center bg-white border-b px-4 h-12">
      <div className="flex items-center gap-4">
        <Bell size={20} />
        <div className="relative" ref={ref}>
          <button onClick={() => setOpen((o) => !o)} className="flex items-center gap-1">
            <User size={20} />
            <ChevronDown size={16} />
          </button>
          {open && (
            <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg">
              {/* onMouseDown ensures logout fires before focus/blur closes menu */}
              <button onMouseDown={logout} className="w-full text-left px-4 py-2 hover:bg-gray-100">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Topbar;
