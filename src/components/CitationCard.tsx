"use client";

import { motion } from "framer-motion";

interface CitationCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

export default function CitationCard({
  icon,
  title,
  description,
  delay = 0,
}: CitationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="p-3 bg-white rounded-lg border border-gray-100 hover:border-primary/30 transition-colors cursor-pointer"
    >
      <div className="flex items-start gap-2">
        <span className="text-sm">{icon}</span>
        <div>
          <p className="text-xs font-medium text-primary">{title}</p>
          <p className="text-xs text-text-light mt-0.5">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
