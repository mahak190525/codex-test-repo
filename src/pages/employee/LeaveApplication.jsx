import { useState } from 'react';
import { Calendar } from 'lucide-react';

const LeaveApplication = () => {
  // In-memory list of leave applications
  const [leaves, setLeaves] = useState([]);
  const [form, setForm] = useState({ start: '', end: '', type: 'sick', reason: '' });

  const submitLeave = (e) => {
    e.preventDefault();
    // Push new leave to list with pending status
    setLeaves([...leaves, { ...form, status: 'pending' }]);
    // Reset form
    setForm({ start: '', end: '', type: 'sick', reason: '' });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <Calendar size={20} /> Leave Application
      </h2>

      {/* Leave application form */}
      <form onSubmit={submitLeave} className="bg-white p-4 rounded shadow grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Start Date</label>
          <input type="date" value={form.start} onChange={(e) => setForm({ ...form, start: e.target.value })} className="border p-2 rounded w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium">End Date</label>
          <input type="date" value={form.end} onChange={(e) => setForm({ ...form, end: e.target.value })} className="border p-2 rounded w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium">Type</label>
          <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="border p-2 rounded w-full">
            <option value="sick">Sick</option>
            <option value="casual">Casual</option>
            <option value="earned">Earned</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Reason</label>
          <input value={form.reason} onChange={(e) => setForm({ ...form, reason: e.target.value })} className="border p-2 rounded w-full" />
        </div>
        <div className="col-span-2">
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Apply</button>
        </div>
      </form>

      {/* Table of previous leaves */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-medium mb-2">Previous Applications</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="p-2">Start</th>
              <th className="p-2">End</th>
              <th className="p-2">Type</th>
              <th className="p-2">Reason</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {leaves.map((l, idx) => (
              <tr key={idx} className="border-b last:border-none">
                <td className="p-2">{l.start}</td>
                <td className="p-2">{l.end}</td>
                <td className="p-2">{l.type}</td>
                <td className="p-2">{l.reason}</td>
                <td className="p-2 capitalize">{l.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveApplication;
