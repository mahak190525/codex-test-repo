import { CalendarDays, Gift, Briefcase } from 'lucide-react';
import { useState } from 'react';

const Overview = () => {
  const [entry, setEntry] = useState(''); // project log input
  const [entries, setEntries] = useState([]); // saved logs
  const [toast, setToast] = useState(false);

  // Mock data
  const holiday = { date: 'Aug 15, 2024', name: 'Independence Day' };
  const leave = { total: 24, taken: 6 }; // static values
  const attendance = {
    present: 18,
    workingDays: 22,
    logs: [
      { date: '2024-05-05', status: 'Present' },
      { date: '2024-05-04', status: 'Present' },
      { date: '2024-05-03', status: 'Absent' },
      { date: '2024-05-02', status: 'Present' },
      { date: '2024-05-01', status: 'Present' },
    ],
  };

  const remaining = leave.total - leave.taken;
  const percent = (leave.taken / leave.total) * 100;

  const submitLog = (e) => {
    e.preventDefault();
    if (!entry) return;
    // TODO: send project log to backend
    const newEntry = { text: entry, time: new Date().toLocaleTimeString() };
    setEntries([newEntry, ...entries]);
    setEntry('');
    setToast(true);
    setTimeout(() => setToast(false), 2000);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <Briefcase size={20} /> Dashboard Overview
      </h2>

      {/* Holiday & leave/attendance cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-4 rounded shadow hover:shadow-md transition">
          <h3 className="font-medium flex items-center gap-2">
            <Gift size={18} /> Upcoming Holiday
          </h3>
          <p className="mt-1 text-sm">{holiday.name} – {holiday.date}</p>
        </div>

        <div className="bg-white p-4 rounded shadow hover:shadow-md transition">
          <p className="font-medium mb-2">Leave Balance</p>
          <div className="text-sm mb-1">Taken: {leave.taken} / {leave.total}</div>
          <div className="w-full bg-gray-200 rounded h-2">
            <div
              className="bg-green-500 h-2 rounded"
              style={{ width: `${percent}%` }}
            />
          </div>
          <div className="text-xs mt-1">Remaining: {remaining} days</div>
        </div>

        <div className="bg-white p-4 rounded shadow hover:shadow-md transition sm:col-span-2 lg:col-span-1">
          <p className="font-medium mb-2">Attendance</p>
          <div className="text-sm">{attendance.present}/{attendance.workingDays} days present</div>
          <ul className="mt-2 text-xs space-y-1">
            {attendance.logs.map((l, i) => (
              <li key={i} className="flex justify-between border-b last:border-none pb-1">
                <span>{l.date}</span>
                <span className={l.status === 'Present' ? 'text-green-600' : 'text-red-600'}>{l.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Project log entry */}
      <form onSubmit={submitLog} className="bg-white p-4 rounded shadow space-y-2">
        <label className="block font-medium">Project worked on today</label>
        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          rows={3}
          className="w-full border p-2 rounded"
        />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
        {toast && <p className="text-green-600 text-sm">Saved for today</p>}
      </form>

      {/* Display saved project entries */}
      {entries.length > 0 && (
        <div className="bg-white p-4 rounded shadow space-y-2">
          <h3 className="font-medium">Recent Project Logs</h3>
          <ul className="space-y-1">
            {entries.map((e, idx) => (
              <li
                key={idx}
                className="text-sm border-b last:border-none pb-1 transition-opacity duration-500" // fade-in effect
              >
                {e.text} <span className="text-xs text-gray-500">({e.time})</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Overview;
