import { FileText, Download, UploadCloud, Trash2 } from 'lucide-react';
import { useState } from 'react';

const Reports = () => {
  // Mock list of downloadable files grouped by category
  const downloads = [
    { name: 'Salary Slip - Jan 2024', type: 'Payroll' },
    { name: 'Attendance Report - Jan 2024', type: 'Attendance' },
    { name: 'Performance Review 2023', type: 'Evaluation' },
  ];

  const [uploads, setUploads] = useState([]);
  const [file, setFile] = useState(null);
  const [docType, setDocType] = useState('Other');

  const handleUpload = (e) => {
    e.preventDefault();
    if (!file) return;
    // TODO: send file to server
    setUploads([...uploads, { name: file.name, type: docType }]);
    setFile(null);
  };

  const removeUpload = (idx) => {
    setUploads(uploads.filter((_, i) => i !== idx));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <FileText size={20} /> Reports & Documents
      </h2>

      {/* Downloadable documents */}
      <div className="grid gap-4 sm:grid-cols-2">
        {downloads.map((d) => (
          <div key={d.name} className="bg-white p-4 rounded shadow flex flex-col justify-between">
            <div>
              <p className="font-medium flex items-center gap-2 mb-2">
                <FileText size={18} /> {d.name}
              </p>
              <p className="text-xs text-gray-500">{d.type}</p>
            </div>
            <button
              onClick={() => console.log('download', d.name)}
              className="mt-3 flex items-center gap-1 text-blue-600 text-sm"
            >
              <Download size={16} /> Download
            </button>
          </div>
        ))}
      </div>

      {/* Upload section */}
      <form onSubmit={handleUpload} className="bg-white p-4 rounded shadow space-y-2">
        <h3 className="font-medium flex items-center gap-2"><UploadCloud size={18} /> Upload Documents</h3>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="border p-2 rounded w-full"
        />
        <select
          value={docType}
          onChange={(e) => setDocType(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option>Payroll</option>
          <option>Attendance</option>
          <option>Evaluation</option>
          <option>Other</option>
        </select>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Upload</button>
      </form>

      {uploads.length > 0 && (
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-medium mb-2">Uploaded Files</h3>
          <ul className="text-sm space-y-1">
            {uploads.map((u, i) => (
              <li key={i} className="flex justify-between items-center">
                <span>{u.name} ({u.type})</span>
                <button onClick={() => removeUpload(i)} className="text-red-600"><Trash2 size={16} /></button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Reports;
