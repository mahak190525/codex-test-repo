import { useState } from 'react';
import { CalendarRange, FileDown } from 'lucide-react';

const previewData = [
  { employee: 'Alice Johnson', present: 20 },
  { employee: 'Bob Smith', present: 18 },
];

const AttendanceExport = () => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [dept, setDept] = useState('');
  const [message, setMessage] = useState('');

  const handleExport = (type) => {
    // TODO: integrate with backend export service
    setMessage(`Exported ${type}`);
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <CalendarRange size={20} /> Attendance Export
      </h2>

      <div className="bg-white p-4 rounded shadow space-y-2">
        <div className="flex flex-wrap gap-2">
          <input
            type="date"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            className="border p-2 rounded"
          />
          <span>to</span>
          <input
            type="date"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            className="border p-2 rounded"
          />
          <select value={dept} onChange={(e) => setDept(e.target.value)} className="border p-2 rounded">
            <option value="">All Departments</option>
            <option>Engineering</option>
            <option>Design</option>
            <option>HR</option>
          </select>
        </div>
        <div className="flex gap-2 mt-2">
          <button onClick={() => handleExport('Excel')} className="px-3 py-1 bg-blue-600 text-white rounded flex items-center gap-1">
            <FileDown size={16} /> Excel
          </button>
          <button onClick={() => handleExport('PDF')} className="px-3 py-1 bg-green-600 text-white rounded flex items-center gap-1">
            <FileDown size={16} /> PDF
          </button>
        </div>
        {message && <p className="text-green-600 text-sm">{message}</p>}
      </div>

      {/* Preview table */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-medium mb-2">Preview</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-left">Employee</th>
              <th className="p-2 text-left">Days Present</th>
            </tr>
          </thead>
          <tbody>
            {previewData.map((p, i) => (
              <tr key={i} className="border-b last:border-none">
                <td className="p-2">{p.employee}</td>
                <td className="p-2">{p.present}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceExport;
