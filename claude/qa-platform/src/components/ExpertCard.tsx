"use client";

import { motion } from "framer-motion";

interface ExpertCardProps {
  name: string;
  title: string;
  experience: string;
  rating: number;
  reviewCount: number;
  delay?: number;
}

export default function ExpertCard({
  name,
  title,
  experience,
  rating,
  reviewCount,
  delay = 0,
}: ExpertCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow"
    >
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
          <span className="text-primary font-bold text-lg">{name[0]}</span>
        </div>
        <div>
          <h4 className="font-bold text-dark">{name}</h4>
          <p className="text-sm text-text-light">{title} / {experience}</p>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-gold text-sm">★</span>
            <span className="text-sm font-medium text-dark">{rating}</span>
            <span className="text-xs text-text-light">（{reviewCount}件）</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
