import { useState } from 'react';
import { Send } from 'lucide-react';

const Complaints = () => {
  const [form, setForm] = useState({ title: '', description: '' });

  const submit = (e) => {
    e.preventDefault();
    // TODO: send complaint to server
    console.log('Complaint submitted', form);
    setForm({ title: '', description: '' });
  };

  const resign = () => {
    if (window.confirm('Are you sure you want to submit your resignation?')) {
      // TODO: handle resignation
      console.log('Resignation submitted');
    }
  };

  return (
    <div className="space-y-4 max-w-lg">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <Send size={20} /> Complaint Portal
      </h2>

      <form onSubmit={submit} className="bg-white p-4 rounded shadow space-y-3">
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="border p-2 rounded w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="border p-2 rounded w-full" rows="4" />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Submit</button>
      </form>

      <button onClick={resign} className="px-4 py-2 bg-red-600 text-white rounded">Submit Resignation</button>
    </div>
  );
};

export default Complaints;
