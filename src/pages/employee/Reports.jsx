import { FileText, Upload } from 'lucide-react';

const Reports = () => {
  // Mock list of downloadable files
  const downloads = [
    { name: 'Salary Slip - Jan 2024', href: '#' },
    { name: 'Attendance Report - Jan 2024', href: '#' },
    { name: 'Performance Review 2023', href: '#' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <FileText size={20} /> Reports & Documents
      </h2>

      {/* Downloadable documents */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-medium mb-2">Downloads</h3>
        <ul className="list-disc ml-5 text-sm space-y-1">
          {downloads.map((d) => (
            <li key={d.name}>
              <a href={d.href} className="text-blue-600 underline">{d.name}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Upload section */}
      <div className="bg-white p-4 rounded shadow space-y-2">
        <h3 className="font-medium flex items-center gap-2"><Upload size={18} /> Upload Documents</h3>
        <input type="file" className="border p-2 rounded w-full" />
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Upload</button>
      </div>
    </div>
  );
};

export default Reports;
