
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Who can use AgriChain?",
      answer: "AgriChain is designed for all participants in the food supply chain, including farmers, processors, transporters, retailers, regulators, and consumers. Each stakeholder has a specialized interface tailored to their specific needs and responsibilities in the food traceability ecosystem."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. AgriChain uses advanced blockchain technology which ensures that once data is recorded, it cannot be tampered with. We employ enterprise-grade encryption, secure access controls, and regular security audits to protect all stakeholder information while maintaining complete data transparency where appropriate."
    },
    {
      question: "How is blockchain used in the platform?",
      answer: "Blockchain provides the foundation for AgriChain's immutable record-keeping. Each transaction or data entry in the supply chain is recorded as a block in the chain, creating a permanent, unalterable history. This enables trust between parties without requiring a central authority, as the blockchain's distributed ledger maintains integrity across the network."
    },
    {
      question: "How do I onboard my organization?",
      answer: "Onboarding to AgriChain is a straightforward process. After registering interest through our website, our implementation team will guide you through a four-step process: initial consultation, system configuration, staff training, and go-live support. The entire process typically takes 2-4 weeks depending on your organization's size and complexity."
    },
    {
      question: "What types of food products can be tracked?",
      answer: "AgriChain can track virtually any food product, from fresh produce and dairy to processed foods and beverages. The system is highly adaptable and can be configured to accommodate the specific requirements and supply chain characteristics of different food categories."
    }
  ];

  return (
    <section id="faq" className="section-container bg-agrichain-cream">
      <h2 className="section-title">Frequently Asked Questions</h2>
      <p className="section-subtitle">Everything you need to know about AgriChain</p>
      
      <div className="max-w-3xl mx-auto mt-12">
        <Accordion type="single" collapsible className="bg-white rounded-xl overflow-hidden shadow-sm">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-gray-50 text-gray-700">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      
      <div className="text-center mt-12">
        <p className="mb-4 text-gray-600">Still have questions?</p>
        <a href="#contact" className="btn-primary inline-block">Contact Our Team</a>
      </div>
    </section>
  );
};

export default FAQSection;
