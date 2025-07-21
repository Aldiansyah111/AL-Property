import { useState, useEffect } from "react";
import {
  rentProperty,
  getPropertyById,
  isRentalActive,
} from "../../context/property";

export default function RentButton({ propertyId, onRefresh }) {
  const [rentPrice, setRentPrice] = useState("0");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const fetchData = async () => {
    if (propertyId === undefined || propertyId === null) return;

    try {
      const property = await getPropertyById(propertyId);
      if (property) {
        setRentPrice(property.rentAmount || "0");
        const active = await isRentalActive(propertyId);
        setStatus(active);
        setError("");
      }
    } catch (err) {
      console.error("Failed to fetch property data:", err);
      setError("Failed to fetch property data.");
    }
  };

  useEffect(() => {
    fetchData();
  }, [propertyId]);

  const handleRent = async () => {
    setLoading(true);
    try {
      const result = await rentProperty(propertyId);
      if (result.success) {
        await fetchData();
        if (onRefresh) onRefresh();
        setSuccessMessage("Successfully rented!");
        setError("");

        setTimeout(() => setSuccessMessage(""), 3000); // Auto-hide after 3 sec
      } else {
        setError("Transaction failed.");
      }
    } catch (err) {
      console.error("Failed to rent:", err);
      setError("Failed to rent the property.");
    }
    setLoading(false);
  };

  return (
    <div className="mt-6 space-y-2">
      {status ? (
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
            This property is currently rented
          </span>
        </div>
      ) : (
        <button
          onClick={handleRent}
          disabled={loading}
          className={`w-full px-6 py-2 rounded-md cursor-pointer transition font-medium text-white ${
            loading
              ? "bg-indigo-400 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          {loading ? "Processing..." : `Rent Now (${rentPrice} ETH)`}
        </button>
      )}

      {successMessage && (
        <p className="text-sm text-green-600 border border-green-200 rounded-md px-3 py-2 bg-green-50">
          {successMessage}
        </p>
      )}

      {error && (
        <p className="text-sm text-red-500 border border-red-200 rounded-md px-3 py-2 bg-red-50">
          {error}
        </p>
      )}
    </div>
  );
}
