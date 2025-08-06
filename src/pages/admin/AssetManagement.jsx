import { useState } from 'react';
import { Monitor, PlusCircle } from 'lucide-react';

const initialAssets = [
  {
    type: 'Laptop',
    name: 'Dell XPS 13',
    employee: 'Alice Johnson',
    purpose: 'Development',
    issued: '2024-01-10',
    returnDate: '2024-12-31',
    condition: 'Good',
  },
];

const employees = ['Alice Johnson', 'Bob Smith', 'Charlie Lee'];

const AssetManagement = () => {
  const [assets, setAssets] = useState(initialAssets);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    type: 'Laptop',
    name: '',
    employee: employees[0],
    purpose: '',
    issued: '',
    returnDate: '',
    condition: 'Good',
  });
  const [message, setMessage] = useState('');

  const addAsset = (e) => {
    e.preventDefault();
    setAssets([...assets, form]);
    setShowModal(false);
    setMessage('Asset added');
    setTimeout(() => setMessage(''), 2000);
    setForm({ type: 'Laptop', name: '', employee: employees[0], purpose: '', issued: '', returnDate: '', condition: 'Good' });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <Monitor size={20} /> Asset Management
      </h2>

      <button
        onClick={() => setShowModal(true)}
        className="px-3 py-1 bg-blue-600 text-white rounded flex items-center gap-1"
      >
        <PlusCircle size={16} /> Add New Asset
      </button>
      {message && <p className="text-green-600 text-sm">{message}</p>}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow text-sm">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-left">Type</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Employee</th>
              <th className="p-2 text-left">Purpose</th>
              <th className="p-2 text-left">Issued</th>
              <th className="p-2 text-left">Expected Return</th>
              <th className="p-2 text-left">Condition</th>
            </tr>
          </thead>
          <tbody>
            {assets.length === 0 && (
              <tr>
                <td colSpan="7" className="p-4 text-center text-gray-500">
                  No assets assigned yet
                </td>
              </tr>
            )}
            {assets.map((a, i) => (
              <tr key={i} className="border-b last:border-none">
                <td className="p-2">{a.type}</td>
                <td className="p-2">{a.name}</td>
                <td className="p-2">{a.employee}</td>
                <td className="p-2">{a.purpose}</td>
                <td className="p-2">{a.issued}</td>
                <td className="p-2">{a.returnDate}</td>
                <td className="p-2">{a.condition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <form onSubmit={addAsset} className="bg-white p-6 rounded shadow space-y-2 w-80">
            <h3 className="font-medium mb-2">Add Asset</h3>
            <input
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              placeholder="Type"
              className="border p-2 rounded w-full"
            />
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Name"
              className="border p-2 rounded w-full"
              required
            />
            <select
              value={form.employee}
              onChange={(e) => setForm({ ...form, employee: e.target.value })}
              className="border p-2 rounded w-full"
            >
              {employees.map((emp) => (
                <option key={emp}>{emp}</option>
              ))}
            </select>
            <input
              value={form.purpose}
              onChange={(e) => setForm({ ...form, purpose: e.target.value })}
              placeholder="Purpose"
              className="border p-2 rounded w-full"
            />
            <input
              type="date"
              value={form.issued}
              onChange={(e) => setForm({ ...form, issued: e.target.value })}
              className="border p-2 rounded w-full"
            />
            <input
              type="date"
              value={form.returnDate}
              onChange={(e) => setForm({ ...form, returnDate: e.target.value })}
              className="border p-2 rounded w-full"
            />
            <select
              value={form.condition}
              onChange={(e) => setForm({ ...form, condition: e.target.value })}
              className="border p-2 rounded w-full"
            >
              <option>Good</option>
              <option>Fair</option>
              <option>Damaged</option>
            </select>
            <div className="flex justify-end gap-2 pt-2">
              <button type="button" onClick={() => setShowModal(false)} className="px-3 py-1 border rounded">
                Cancel
              </button>
              <button type="submit" className="px-3 py-1 bg-blue-600 text-white rounded">
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AssetManagement;
