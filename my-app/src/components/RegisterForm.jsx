import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: formData.email,
          password: formData.password,
          name: formData.name
        })
      });

      const data = await res.json();

      if (res.ok) {
        alert('Registrasi berhasil!');
        setFormData({ name: '', email: '', password: '' });

        // ✅ Redirect ke login page, tanpa set isLoggedIn
        navigate('/login', { replace: true });
      }
      else {
        alert(data.message || 'Registrasi gagal');
        setMessage(data.message || 'Registration failed');
      }
    } catch (error) {
      console.error(error);
      alert('Terjadi kesalahan saat registrasi');
      setMessage('Error registering user');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Register as Tenant</h2>
      {message && <p className="mb-4 text-center text-sm text-red-500">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition"
        >
          Register
        </button>
      </form>

      <p className="mt-4 text-sm text-center">
        Sudah punya akun?{' '}
        <Link to="/login" className="text-indigo-600 hover:underline">
          Login di sini
        </Link>
      </p>
    </div>
  );
}
