"use client";

import { motion } from "framer-motion";

interface LawyerCardProps {
  name: string;
  specialty: string;
  experience: string;
  focusAreas: string[];
  pricing: string;
  rating: number;
  reviewCount: number;
  delay?: number;
}

export default function LawyerCard({
  name,
  specialty,
  experience,
  focusAreas,
  pricing,
  rating,
  reviewCount,
  delay = 0,
}: LawyerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all"
    >
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 bg-dark/10 rounded-full flex items-center justify-center shrink-0">
          <span className="text-dark font-bold text-xl">{name[0]}</span>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-bold text-dark text-lg">{name} <span className="text-sm font-normal text-text-light">弁護士</span></h4>
              <p className="text-sm text-text-light">{specialty} / {experience}</p>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-gold">⭐</span>
              <span className="font-medium text-dark">{rating}</span>
              <span className="text-xs text-text-light">（{reviewCount}件のQ&A回答）</span>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="px-2 py-1 bg-light-bg text-xs text-text-light rounded-full"
              >
                {area}
              </span>
            ))}
          </div>
          <p className="text-sm text-text mt-3">
            <span className="font-medium">料金：</span>{pricing}
          </p>
          <div className="mt-4 flex items-center gap-3">
            <button className="px-5 py-2.5 bg-white border-2 border-dark text-dark font-medium rounded-lg hover:bg-dark hover:text-white transition-all text-sm flex items-center gap-2">
              📞 直接問い合わせる
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
