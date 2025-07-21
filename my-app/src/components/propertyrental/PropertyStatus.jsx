import { useEffect, useState } from "react";
import { isRentalActive, getTenant } from "../../context/property";

export default function PropertyStatus({ propertyId, refresh }) {
  const [status, setStatus] = useState(null);
  const [tenant, setTenant] = useState(null);

  useEffect(() => {
    const fetchStatus = async () => {
      const active = await isRentalActive(propertyId);
      const t = await getTenant(propertyId);
      setStatus(active);
      setTenant(t);
    };

    if (!isNaN(propertyId)) {
      fetchStatus();
    }
  }, [propertyId, refresh]);

  return (
    <div className="text-sm text-gray-700 space-y-2 mt-4 border rounded-md p-4 bg-gray-50">
      <div className="flex items-center gap-2">
        <span className="font-medium">Rental Status:</span>
        {status === null ? (
          <span className="text-gray-400">Loading...</span>
        ) : status ? (
          <span className="px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-700 font-semibold">
            Active
          </span>
        ) : (
          <span className="px-2 py-0.5 text-xs rounded-full bg-red-100 text-red-700 font-semibold">
            Inactive
          </span>
        )}
      </div>

      {tenant && (
        <div className="flex items-center gap-2">
          <span className="font-medium">Tenant:</span>
          <span className="text-indigo-600 font-mono text-xs bg-indigo-50 px-2 py-0.5 rounded">
            {tenant}
          </span>
        </div>
      )}
    </div>
  );
}
