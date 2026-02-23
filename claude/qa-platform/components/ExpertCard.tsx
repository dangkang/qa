"use client";

import { motion } from "framer-motion";

interface ExpertCardProps {
  name: string;
  title: string;
  experience: string;
  rating: number;
  reviews: number;
  avatarColor?: string;
  delay?: number;
  selected?: boolean;
}

export default function ExpertCard({
  name,
  title,
  experience,
  rating,
  reviews,
  avatarColor = "bg-primary",
  delay = 0,
  selected = false,
}: ExpertCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={`p-4 bg-white border-2 rounded-xl transition-all cursor-pointer ${
        selected
          ? "border-primary shadow-md"
          : "border-gray-200 hover:border-primary/30"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-12 h-12 ${avatarColor} rounded-full flex items-center justify-center text-white font-bold text-lg`}
        >
          {name.charAt(0)}
        </div>
        <div className="flex-1">
          <p className="font-bold text-dark text-sm">{name}</p>
          <p className="text-xs text-text-light">{title}</p>
          <p className="text-xs text-text-light">{experience}</p>
        </div>
      </div>
      <div className="mt-2 flex items-center gap-1">
        <span className="text-gold text-sm">★</span>
        <span className="text-sm font-medium text-dark">{rating}</span>
        <span className="text-xs text-text-light">（{reviews}件）</span>
      </div>
    </motion.div>
  );
}
