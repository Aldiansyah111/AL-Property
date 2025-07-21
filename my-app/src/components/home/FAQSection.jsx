import { useState } from "react";

const faqs = [
  {
    question: "How does the blockchain system work on this platform?",
    answer: "Each transaction is recorded in a smart contract on the blockchain to ensure full transparency and security."
  },
  {
    question: "Do I need to use cryptocurrency to rent a property?",
    answer: "No, we support both fiat and crypto payments to suit different user preferences."
  },
  {
    question: "Is the platform free to use?",
    answer: "Yes, browsing and searching properties is completely free. Fees apply only during actual transactions."
  },
  {
    question: "How is user data kept secure?",
    answer: "All data is encrypted and stored in a decentralized system to minimize any risk of breaches."
  },
  {
    question: "Can I cancel a rental after the transaction is completed?",
    answer: "It depends on the specific cancellation policy agreed upon in the smart contract with the property owner."
  },
  {
    question: "How are properties verified?",
    answer: "We have a dedicated verification team and a user rating system to maintain listing quality and trust."
  },
  {
    question: "What payment methods are supported?",
    answer: "We accept bank transfers, e-wallets, and major cryptocurrencies like USDT, ETH, and BTC."
  },
  {
    question: "Can I list my own property on this platform?",
    answer: "Absolutely! You can register as a property owner and start renting out after the verification process."
  },
  {
    question: "Is the service available internationally?",
    answer: "We currently operate in Southeast Asia, but international expansion is already in progress."
  },
  {
    question: "What happens if there's a dispute between tenant and owner?",
    answer: "We offer a smart contract–based dispute resolution system, supported by our dedicated mediation team."
  },
  {
    question: "Can I save favorite properties for later?",
    answer: "Yes, registered users can bookmark listings to revisit them anytime through their personal dashboard."
  }
];


export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto py-20">
      <h2 className="text-4xl font-bold text-indigo-700 mb-10 text-center">Pertanyaan Umum</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm transition"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
            >
              <span className="text-indigo-700 font-medium">{faq.question}</span>
              <span className="text-xl text-indigo-500">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
