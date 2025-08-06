import { useState } from 'react';
import { Users, Search, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock employee data
const data = [
  { id: 'E001', name: 'Alice Johnson', role: 'Developer', department: 'Engineering', contact: 'alice@example.com' },
  { id: 'E002', name: 'Bob Smith', role: 'Designer', department: 'Design', contact: 'bob@example.com' },
  { id: 'E003', name: 'Charlie Lee', role: 'HR', department: 'HR', contact: 'charlie@example.com' },
];

const EmployeeList = () => {
  const [search, setSearch] = useState('');
  const [dept, setDept] = useState('');
  const [role, setRole] = useState('');

  const filtered = data.filter((e) => {
    const matchSearch =
      e.name.toLowerCase().includes(search.toLowerCase()) || e.id.toLowerCase().includes(search.toLowerCase());
    const matchDept = dept ? e.department === dept : true;
    const matchRole = role ? e.role === role : true;
    return matchSearch && matchDept && matchRole;
  });

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <Users size={20} /> Employees
      </h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 bg-white p-4 rounded shadow items-center">
        <div className="flex items-center border rounded px-2">
          <Search size={16} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search name or ID"
            className="p-1 outline-none"
          />
        </div>
        <select value={dept} onChange={(e) => setDept(e.target.value)} className="border p-1 rounded">
          <option value="">All Departments</option>
          <option>Engineering</option>
          <option>Design</option>
          <option>HR</option>
        </select>
        <select value={role} onChange={(e) => setRole(e.target.value)} className="border p-1 rounded">
          <option value="">All Roles</option>
          <option>Developer</option>
          <option>Designer</option>
          <option>HR</option>
        </select>
        <span className="ml-auto text-sm">{filtered.length} employees found</span>
      </div>

      {/* Employee table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow text-sm">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-left">ID</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Role</th>
              <th className="p-2 text-left">Department</th>
              <th className="p-2 text-left">Contact</th>
              <th className="p-2"></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((e) => (
              <tr key={e.id} className="border-b hover:bg-gray-50">
                <td className="p-2">{e.id}</td>
                <td className="p-2">{e.name}</td>
                <td className="p-2">{e.role}</td>
                <td className="p-2">{e.department}</td>
                <td className="p-2">{e.contact}</td>
                <td className="p-2 text-center">
                  <Link to={`/admin/employees/${e.id}`} className="text-blue-600 inline-flex"><Eye size={16} /></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
