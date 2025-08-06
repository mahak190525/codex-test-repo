import { Calendar, Briefcase } from 'lucide-react';
import { useState } from 'react';

const Overview = () => {
  const [log, setLog] = useState('');

  // Mock data placeholders
  const holiday = { date: '2024-12-25', name: 'Christmas' };
  const leaveBalance = 12; // Static number
  const daysPresent = 18; // Static number

  const submitLog = (e) => {
    e.preventDefault();
    // TODO: Replace with API call to save project log
    console.log('Project log:', log);
    setLog('');
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <Briefcase size={20} /> Dashboard Overview
      </h2>

      {/* Upcoming holiday */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-medium flex items-center gap-2"><Calendar size={18} /> Upcoming Holiday</h3>
        <p className="mt-1 text-sm">{holiday.name} - {holiday.date}</p>
      </div>

      {/* Leave balance and attendance */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <p className="font-medium">Leave Balance</p>
          <p className="text-2xl">{leaveBalance} days</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="font-medium">Days Present This Month</p>
          <p className="text-2xl">{daysPresent}</p>
        </div>
      </div>

      {/* Project log entry */}
      <form onSubmit={submitLog} className="bg-white p-4 rounded shadow space-y-2">
        <label className="block font-medium">Quick Project Log</label>
        <input
          value={log}
          onChange={(e) => setLog(e.target.value)}
          placeholder="What project did you work on today?"
          className="w-full border p-2 rounded"
        />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
      </form>
    </div>
  );
};

export default Overview;
