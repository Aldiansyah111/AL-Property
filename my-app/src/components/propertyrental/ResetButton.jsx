import { useState } from "react";
import { resetRental } from "../../context/property";

export default function ResetButton({ propertyId }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleReset = async () => {
    if (propertyId === undefined || propertyId === null) {
      setError("ID properti tidak valid.");
      return;
    }

    setLoading(true);
    setMessage("");
    setError("");

    try {
      const result = await resetRental(propertyId);
      if (result.success) {
        setMessage("Sewa berhasil direset!");
      } else {
        setError("Gagal reset sewa.");
      }
    } catch (err) {
      console.error("Gagal reset sewa:", err);
      setError("Terjadi kesalahan saat mereset.");
    }

    setLoading(false);
  };

  return (
    <div className="mt-6">
      <button
        onClick={handleReset}
        disabled={loading}
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition cursor-pointer"
      >
        {loading ? "Memproses..." : "Reset Sewa (Owner)"}
      </button>

      {message && <p className="text-sm mt-2 text-green-600">{message}</p>}
      {error && <p className="text-sm mt-2 text-red-500">{error}</p>}
    </div>
  );
}
