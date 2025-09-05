import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How can I register for a course?",
    answer:
      "You can register online through our website or contact us directly for assistance.",
  },
  {
    question: "Do I need prior experience to join?",
    answer:
      "No, we offer beginner to advanced-level courses suitable for all skill levels.",
  },
  {
    question: "Are the courses accredited?",
    answer:
      "Yes, all our courses are fully accredited and industry-recognized.",
  },
  {
    question: "Will I receive a certificate after training?",
    answer:
      "Yes, upon successful completion, you’ll receive an official certificate.",
  },
  {
    question: "Do you provide hands-on training?",
    answer:
      "Yes, our courses include practical sessions and live demonstrations.",
  },
  {
    question: "Where are the courses held?",
    answer:
      "All training sessions are conducted at our Manchester training center.",
  },
  
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="position-relative py-5 bg-white overflow-hidden"
      style={{ marginTop: "5rem" }}
    >
      {/* Left Background Image (Top Left) */}
      <img
        src="/left-faq.png"
        alt="left design"
        className="position-absolute start-0 img-fluid"
        style={{
          width: "620px", 
          height: "auto",
          top: "-320px", 
          zIndex: 0,
        }}
      />

      <img
        src="/right-faq.png"
        alt="right design"
        className="position-absolute end-0 img-fluid"
        style={{
          width: "600px",
          height: "auto",
          bottom: "-120px",
          zIndex: 0,
        }}
      />

      {/* Title */}
      <h2
        className="text-center mb-5 fw-bold position-relative"
        style={{
          fontFamily: "Syne",
          fontWeight: 700,
          fontSize: "28px",
          lineHeight: "150%",
          textTransform: "capitalize",
          zIndex: 1,
        }}
      >
        <span style={{ color: "black" }}>Frequently Ask </span>
        <span style={{ color: "#23A6F0" }}>Questions</span>
      </h2>

      {/* FAQ Grid */}
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row g-9">
          {/* Left Column (3 FAQs) */}
          <div className="col-md-6 d-flex flex-column gap-3">
            {faqs.slice(0, 3).map((faq, index) => (
              <div
                key={index}
                className="bg-white shadow rounded p-4 position-relative"
                style={{ zIndex: 1 }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="d-flex align-items-center justify-content-between w-100 text-start fw-medium fs-6 border-0 bg-transparent"
                >
                  <span>{faq.question}</span>
                  {openIndex === index ? (
                    <Minus size={20} className="text-primary" />
                  ) : (
                    <Plus size={20} className="text-primary" />
                  )}
                </button>
                {openIndex === index && (
                  <p className="mt-3 text-muted small">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>

          {/* Right Column (3 FAQs) */}
          <div className="col-md-6 d-flex flex-column gap-3">
            {faqs.slice(3, 6).map((faq, index) => (
              <div
                key={index + 3}
                className="bg-white shadow rounded p-4 position-relative"
                style={{ zIndex: 1 }}
              >
                <button
                  onClick={() => toggleFAQ(index + 3)}
                  className="d-flex align-items-center justify-content-between w-100 text-start fw-medium fs-6 border-0 bg-transparent"
                >
                  <span>{faq.question}</span>
                  {openIndex === index + 3 ? (
                    <Minus size={20} className="text-primary" />
                  ) : (
                    <Plus size={20} className="text-primary" />
                  )}
                </button>
                {openIndex === index + 3 && (
                  <p className="mt-3 text-muted small">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
