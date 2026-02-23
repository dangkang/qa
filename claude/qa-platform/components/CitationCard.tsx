"use client";

import { motion } from "framer-motion";

interface CitationCardProps {
  label: string;
  description: string;
  delay?: number;
}

export default function CitationCard({
  label,
  description,
  delay = 0,
}: CitationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay }}
      className="p-3 bg-white border border-gray-200 rounded-lg hover:border-secondary/50 transition-colors cursor-pointer"
    >
      <p className="text-xs font-medium text-secondary mb-1">{label}</p>
      <p className="text-xs text-text-light leading-relaxed">{description}</p>
    </motion.div>
  );
}
