import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is the app free to download?",
    answer: "Yes! The app is completely free to download and use. We offer a premium subscription with additional features for power users, but the core functionality is available at no cost.",
  },
  {
    question: "Which platforms are supported?",
    answer: "Our app is available on both iOS (iPhone and iPad) and Android devices. You can download it from the App Store or Google Play Store.",
  },
  {
    question: "Can I sync data across multiple devices?",
    answer: "Absolutely! When you create an account, your data syncs seamlessly across all your devices in real-time. Start a task on your phone and continue on your tablet.",
  },
  {
    question: "Is my data secure?",
    answer: "Security is our top priority. We use bank-level 256-bit encryption to protect your data. Your information is stored securely and never shared with third parties.",
  },
  {
    question: "How do I get support if I have issues?",
    answer: "We offer 24/7 customer support through the app. Just tap the help icon in settings to chat with our support team. You can also email us at support@appname.com.",
  },
  {
    question: "Can I export my data?",
    answer: "Yes, you can export all your data at any time in various formats including CSV and PDF. We believe your data belongs to you.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Got questions? We've got answers.
            </p>
          </motion.div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="card-elevated px-6 border-none"
                >
                  <AccordionTrigger className="text-foreground text-left font-semibold hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
