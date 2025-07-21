export default function ContactSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Left - Contact Info */}
        <div>
          <h2 className="text-4xl font-bold text-indigo-700 mb-6">Contact Us</h2>
          <p className="text-gray-600 text-lg mb-6">
            Have questions, partnership ideas, or need assistance? Our team is ready to help you.
          </p>

          <div className="space-y-4 text-left">
            <div className="flex items-center space-x-3">
              <span className="text-indigo-600 text-xl">📧</span>
              <a href="mailto:support@propertyrental.com" className="text-gray-700 hover:underline">
                support@propertyrental.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-indigo-600 text-xl">📞</span>
              <a href="tel:+6281234567890" className="text-gray-700 hover:underline">
                +62 812 3456 7890
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-indigo-600 text-xl">📍</span>
              <p className="text-gray-700">Jakarta, Indonesia</p>
            </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-md">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
