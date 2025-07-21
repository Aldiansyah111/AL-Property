import {
  HomeIcon,
  EnvelopeIcon,
  PhoneIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white pt-10 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Brand & Tagline */}
        <div>
          <h2 className="text-xl font-bold mb-3">🏠 PropertyRental</h2>
          <p className="text-blue-100">
            The easiest way to find and rent your dream property with Ethereum.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-md font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-blue-100">
            <li className="flex items-center gap-2">
              <EnvelopeIcon className="h-5 w-5" />
              support@propertyrental.com
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5" />
              +62 812 3456 7890
            </li>
            <li className="flex items-center gap-2">
              <BuildingOffice2Icon className="h-5 w-5" />
              Jl. Blockchain Raya No. 42, Jakarta
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-blue-100">
            <li className="flex items-center gap-2">
              <HomeIcon className="h-5 w-5" />
              <a href="/" className="hover:underline">Home</a>
            </li>
            <li className="flex items-center gap-2">
              <HomeIcon className="h-5 w-5" />
              <a href="/explore" className="hover:underline">Explore</a>
            </li>
            <li className="flex items-center gap-2">
              <HomeIcon className="h-5 w-5" />
              <a href="/create" className="hover:underline">Add Property</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-blue-500 mt-8 pt-4 text-center text-xs text-blue-100">
        &copy; {new Date().getFullYear()} PropertyRental. All rights reserved.
      </div>
    </footer>
  );
}
