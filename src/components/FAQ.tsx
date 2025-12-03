import { motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

export function FAQ() {
  const faqs = [
    {
      question: "How long does a typical construction project take?",
      answer: "Project timelines vary depending on the scope and complexity. Residential renovations typically take 2-6 months, custom homes 12-18 months, and commercial projects 18-36 months. We provide detailed timelines during the planning phase and keep you updated throughout the process.",
    },
    {
      question: "Do you provide free estimates and consultations?",
      answer: "Yes, we offer free initial consultations and project estimates. Our team will visit your site, discuss your vision, assess the scope of work, and provide a detailed estimate within 5-7 business days. There's no obligation to proceed.",
    },
    {
      question: "Are you licensed and insured across Canada?",
      answer: "Absolutely. BuildCraft is fully licensed and insured to operate across all Canadian provinces. We maintain comprehensive general liability insurance, workers' compensation, and bonding coverage. All permits and regulatory compliance are handled by our team.",
    },
    {
      question: "What sets BuildCraft apart from other construction companies?",
      answer: "Our 25+ years of experience, commitment to quality craftsmanship, transparent communication, and 98% client satisfaction rate. We use only premium materials, employ certified professionals, and guarantee all our work. Our project management system ensures on-time, on-budget delivery.",
    },
    {
      question: "Can you work within my budget constraints?",
      answer: "Yes, we work with various budget ranges and can adapt our approach to meet your financial requirements. During consultation, we'll discuss your budget and provide options to maximize value while maintaining quality standards. We offer transparent pricing with no hidden costs.",
    },
    {
      question: "Do you handle permits and regulatory approvals?",
      answer: "Yes, we handle all necessary permits, inspections, and regulatory approvals as part of our comprehensive service. Our team is well-versed in local building codes and regulations across Canada, ensuring full compliance throughout your project.",
    },
    {
      question: "What happens if there are unexpected issues during construction?",
      answer: "We conduct thorough site assessments to minimize surprises, but if unexpected issues arise, we immediately communicate with you, provide solutions, and discuss any budget or timeline implications. Our experienced team is skilled at problem-solving and finding cost-effective solutions.",
    },
    {
      question: "Do you offer warranties on your construction work?",
      answer: "Yes, we provide comprehensive warranties on all our work. Structural work comes with a 10-year warranty, general construction with 5 years, and finishes with 2 years. We also honor manufacturer warranties on all materials and equipment installed.",
    },
    {
      question: "Can you work on projects during winter months?",
      answer: "Yes, we work year-round across Canada. While weather can affect some outdoor work, we plan projects accordingly and use appropriate techniques for cold-weather construction. Interior renovations and certain construction phases can continue regardless of season.",
    },
    {
      question: "How do you ensure quality control throughout the project?",
      answer: "We have a multi-stage quality control process including regular site inspections, milestone reviews, and final walkthroughs. Our project managers conduct daily quality checks, and we use only certified materials and subcontractors who meet our high standards.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
            Got Questions? We Have Answers
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to the most common questions about our construction services, 
            processes, and what you can expect when working with BuildCraft.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem 
                    value={`item-${index}`} 
                    className="bg-gray-50 rounded-xl border border-gray-200 px-6 hover:bg-gray-100 transition-all duration-300 water-flow relative"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <p className="text-gray-600 leading-relaxed text-base">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16 p-8 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team is here to help! Contact us for personalized answers to your specific 
              construction questions or to discuss your project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 water-ripple"
              >
                Contact Our Experts
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 water-flow"
              >
                Schedule a Call
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}