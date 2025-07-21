import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function LoginForm() {
  const [formData, setFormData] = useState({
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
      const res = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: formData.email,
          password: formData.password
        })
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ Simpan user dan status login ke localStorage
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('isLoggedIn', 'true');
        window.location.reload();
        alert('Login berhasil!');
        navigate('/explore', { replace: true });
      } else {
        alert(data.message || 'Login gagal');
        setMessage(data.message || 'Login gagal');
      }
    } catch (error) {
      console.error(error);
      alert('Terjadi kesalahan saat login');
      setMessage('Terjadi kesalahan saat login');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      {message && <p className="mb-4 text-center text-sm text-red-500">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-indigo-500"
            placeholder="your@email.com"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-indigo-500"
            placeholder="••••••••"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md transition"
        >
          Login
        </button>
      </form>

      <p className="mt-4 text-sm text-center">
        Belum punya akun?{' '}
        <Link to="/register" className="text-green-600 hover:underline">
          Daftar di sini
        </Link>
      </p>
    </div>
  );
}