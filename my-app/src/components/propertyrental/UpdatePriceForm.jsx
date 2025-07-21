import { useState } from "react";
import { updateRentAmount } from "../../context/property";

export default function UpdatePriceForm({ propertyId, onUpdated }) {
  const [newPrice, setNewPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const result = await updateRentAmount(propertyId, newPrice);
    if (result.success) {
      alert("✅ Rent price updated successfully!");
      setNewPrice("");
      if (onUpdated) onUpdated();
    } else {
      setMessage("❌ Failed to update rent price.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleUpdate} className="flex flex-col sm:flex-row items-center gap-2">
      <input
        type="number"
        placeholder="New price (ETH)"
        step="0.001"
        value={newPrice}
        onChange={(e) => setNewPrice(e.target.value)}
        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all whitespace-nowrap cursor-pointer"
      >
        {loading ? "Updating..." : "Update Price"}
      </button>
      {message && (
        <p className="text-xs text-gray-600 sm:ml-2 mt-1 sm:mt-0">{message}</p>
      )}
    </form>
  );
}
