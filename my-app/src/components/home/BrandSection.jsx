export default function BrandSection() {
  const logos = [
  "https://cdn.worldvectorlogo.com/logos/airbnb-1.svg",
    "https://cdn.worldvectorlogo.com/logos/binance-coin-bnb-logo.svg",
    "https://cdn.worldvectorlogo.com/logos/ethereum-eth.svg",
    "https://cdn.worldvectorlogo.com/logos/coinbase.svg",
    "https://cdn.worldvectorlogo.com/logos/opensea.svg",
    "https://cdn.worldvectorlogo.com/logos/metamask.svg",
    "https://cdn.worldvectorlogo.com/logos/polygon-matic-logo.svg",
    "https://cdn.worldvectorlogo.com/logos/solana-sol-logo.svg",
    "https://cdn.worldvectorlogo.com/logos/trustwallet.svg",
    "https://cdn.worldvectorlogo.com/logos/tether-1.svg",
    "https://cdn.worldvectorlogo.com/logos/chainlink-link-logo.svg",
    "https://cdn.worldvectorlogo.com/logos/bnb-chain-bnb-logo.svg",
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-12">
          Trusted by Leading Brands
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-lg shadow-sm border flex items-center justify-center"
            >
              <img
                src={logo}
                alt={`Brand ${i + 1}`}
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
