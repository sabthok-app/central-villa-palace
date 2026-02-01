import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "9779800000000"; // Replace with actual number
  const message = encodeURIComponent(
    "Hello! I'm interested in booking Central Villa for an event. Can you provide more information?"
  );

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#20BD5A] rounded-full shadow-lg flex items-center justify-center group"
    >
      <MessageCircle className="h-8 w-8 text-white" />

      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />

      {/* Tooltip */}
      <span className="absolute right-full mr-4 px-4 py-2 bg-foreground text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        Chat with us!
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
