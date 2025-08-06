import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// Mocked employee details
const employee = {
  id: 'E001',
  name: 'Alice Johnson',
  email: 'alice@example.com',
  phone: '555-111-2222',
  department: 'Engineering',
  role: 'Developer',
  joinDate: '2022-01-10',
};

const salaryHistory = [
  { month: 'Jan 2024', base: 5000, bonus: 500 },
  { month: 'Feb 2024', base: 5000, bonus: 400 },
];

const attendanceLogs = Array.from({ length: 5 }, (_, i) => ({
  date: `2024-05-0${i + 1}`,
  status: i % 4 === 0 ? 'Absent' : 'Present',
}));

const performance = {
  reviews: ['Exceeds expectations', 'Great team player'],
  ratings: [5, 4],
  goals: [
    { title: 'Project Alpha', progress: 0.7 },
    { title: 'Improve QA', progress: 0.4 },
  ],
};

const tabs = ['Profile', 'Salary', 'Attendance', 'Performance'];

const EmployeeProfile = () => {
  const { id } = useParams();
  const [active, setActive] = useState('Profile');
  const showOnlyAbsentees = false; // placeholder for future filter

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Link to="/admin/employees" className="text-blue-600 flex items-center gap-1">
          <ArrowLeft size={16} /> Back to List
        </Link>
        <h2 className="text-xl font-semibold">Employee {id}</h2>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`px-3 py-1 ${active === t ? 'border-b-2 border-blue-600 font-medium' : ''}`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {active === 'Profile' && (
        <div className="bg-white p-4 rounded shadow text-sm space-y-1">
          <p><strong>Name:</strong> {employee.name}</p>
          <p><strong>Email:</strong> {employee.email}</p>
          <p><strong>Phone:</strong> {employee.phone}</p>
          <p><strong>Department:</strong> {employee.department}</p>
          <p><strong>Role:</strong> {employee.role}</p>
          <p><strong>Join Date:</strong> {employee.joinDate}</p>
        </div>
      )}

      {active === 'Salary' && (
        <div className="bg-white p-4 rounded shadow">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="p-2 text-left">Month</th>
                <th className="p-2 text-left">Base Pay</th>
                <th className="p-2 text-left">Bonuses</th>
                <th className="p-2 text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              {salaryHistory.map((s) => (
                <tr key={s.month} className="border-b last:border-none">
                  <td className="p-2">{s.month}</td>
                  <td className="p-2">${s.base}</td>
                  <td className="p-2">${s.bonus}</td>
                  <td className="p-2">${s.base + s.bonus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {active === 'Attendance' && (
        <div className="bg-white p-4 rounded shadow">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="p-2 text-left">Date</th>
                <th className="p-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {attendanceLogs
                .filter((a) => (showOnlyAbsentees ? a.status === 'Absent' : true))
                .map((a, i) => (
                  <tr key={i} className="border-b last:border-none">
                    <td className="p-2">{a.date}</td>
                    <td className="p-2">{a.status}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}

      {active === 'Performance' && (
        <div className="bg-white p-4 rounded shadow space-y-2 text-sm">
          <div>
            <h3 className="font-medium mb-1">Reviews</h3>
            <ul className="list-disc ml-5">
              {performance.reviews.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-1">Goals</h3>
            {performance.goals.map((g, i) => (
              <div key={i} className="mb-2">
                <p>{g.title}</p>
                <div className="w-full bg-gray-200 rounded h-2">
                  <div className="bg-blue-500 h-2 rounded" style={{ width: `${g.progress * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeProfile;
