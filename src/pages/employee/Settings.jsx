import { useState } from 'react';
import { Settings as SettingsIcon, User } from 'lucide-react';

const Settings = () => {
  // Profile fields stored locally
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    address: '123 Main St, City',
  });
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setProfile({ ...profile, [field]: value });
  };

  const validate = () => {
    const errs = {};
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(profile.email)) errs.email = 'Invalid email';
    if (!/^\d{3}-\d{3}-\d{4}$/.test(profile.phone)) errs.phone = 'Use 123-456-7890 format';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const save = () => {
    if (!validate()) return;
    // TODO: Persist profile to server
    console.log('Saved profile', profile);
    setMessage('Changes saved');
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <div className="space-y-4 max-w-md">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <SettingsIcon size={20} /> Settings
      </h2>

      <div className="bg-white p-4 rounded shadow space-y-3">
        <div className="flex items-center gap-2 mb-2">
          <User size={18} />
          <span className="font-medium">Profile</span>
        </div>
        <div>
          <label className="block text-sm">Name</label>
          <input value={profile.name} disabled className="border p-2 rounded w-full bg-gray-100" />
        </div>
        <div>
          <label className="block text-sm">Email</label>
          <input
            value={profile.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className={`border p-2 rounded w-full ${errors.email ? 'border-red-500' : 'focus:border-blue-500'}`}
          />
          {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm">Phone</label>
          <input
            value={profile.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className={`border p-2 rounded w-full ${errors.phone ? 'border-red-500' : 'focus:border-blue-500'}`}
          />
          {errors.phone && <p className="text-xs text-red-600">{errors.phone}</p>}
        </div>
        <div>
          <label className="block text-sm">Address</label>
          <input
            value={profile.address}
            onChange={(e) => handleChange('address', e.target.value)}
            className="border p-2 rounded w-full focus:border-blue-500"
          />
        </div>
        <button onClick={save} className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">Save</button>
        {message && <p className="text-green-600 text-sm">{message}</p>}
      </div>
    </div>
  );
};

export default Settings;
