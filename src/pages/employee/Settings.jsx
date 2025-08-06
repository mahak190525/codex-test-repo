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

  const handleChange = (field, value) => {
    setProfile({ ...profile, [field]: value });
  };

  const save = () => {
    // TODO: Persist profile to server
    console.log('Saved profile', profile);
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
        {Object.entries(profile).map(([field, value]) => (
          <div key={field}>
            <label className="block text-sm capitalize">{field}</label>
            <input
              value={value}
              onChange={(e) => handleChange(field, e.target.value)}
              className="border p-2 rounded w-full"
            />
          </div>
        ))}
        <button onClick={save} className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">Save</button>
      </div>
    </div>
  );
};

export default Settings;
