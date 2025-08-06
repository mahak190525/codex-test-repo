import { useState } from 'react';
import { Send } from 'lucide-react';

const Complaints = () => {
  const [form, setForm] = useState({ title: '', description: '', category: 'General', file: null });
  const [complaints, setComplaints] = useState([]); // previous complaints
  const [resigned, setResigned] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    // TODO: send complaint to server
    setComplaints([
      ...complaints,
      { ...form, date: new Date().toLocaleDateString(), status: 'Open' },
    ]);
    setForm({ title: '', description: '', category: 'General', file: null });
  };

  const confirmResign = () => {
    setShowModal(false);
    // TODO: handle resignation
    setResigned(true);
  };

  return (
    <div className="space-y-4 max-w-xl">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <Send size={20} /> Complaint Portal
      </h2>

      <form onSubmit={submit} className="bg-white p-4 rounded shadow space-y-3">
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Category</label>
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="border p-2 rounded w-full"
          >
            <option>General</option>
            <option>Payroll</option>
            <option>Harassment</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="border p-2 rounded w-full"
            rows="4"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Attach File (optional)</label>
          <input
            type="file"
            onChange={(e) => setForm({ ...form, file: e.target.files[0] })}
            className="border p-2 rounded w-full"
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Submit</button>
      </form>

      {/* Previous complaints */}
      {complaints.length > 0 && (
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-medium mb-2">Previous Complaints</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b">
                <th className="p-2">Date</th>
                <th className="p-2">Title</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((c, i) => (
                <tr key={i} className="border-b last:border-none">
                  <td className="p-2">{c.date}</td>
                  <td className="p-2">{c.title}</td>
                  <td className="p-2">{c.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Resignation */}
      <button
        onClick={() => setShowModal(true)}
        className="px-4 py-2 bg-red-600 text-white rounded"
      >
        Submit Resignation
      </button>
      {resigned && <p className="text-green-600 text-sm">Resignation submitted</p>}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow space-y-4">
            <p>Are you sure you want to resign?</p>
            <div className="flex justify-end gap-2">
              <button onClick={() => setShowModal(false)} className="px-3 py-1 border rounded">Cancel</button>
              <button onClick={confirmResign} className="px-3 py-1 bg-red-600 text-white rounded">Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Complaints;
