"use client";

import { motion } from "framer-motion";

interface PricingCardProps {
  title: string;
  price: string;
  priceNote?: string;
  features: { label: string; included: boolean | string }[];
  highlighted?: boolean;
  delay?: number;
  ctaLabel?: string;
}

export default function PricingCard({
  title,
  price,
  priceNote,
  features,
  highlighted = false,
  delay = 0,
  ctaLabel = "選択する",
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={`rounded-2xl p-6 border-2 transition-shadow ${
        highlighted
          ? "border-primary bg-white shadow-xl relative"
          : "border-gray-200 bg-white"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-bold rounded-full">
          人気
        </div>
      )}
      <h3 className="text-lg font-bold text-dark text-center">{title}</h3>
      <div className="text-center mt-4 mb-6">
        <span className="text-3xl font-bold text-primary">{price}</span>
        {priceNote && (
          <span className="text-sm text-text-light block mt-1">{priceNote}</span>
        )}
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature) => (
          <li key={feature.label} className="flex items-center gap-2 text-sm">
            {typeof feature.included === "string" ? (
              <>
                <span className="text-text-light">—</span>
                <span className="text-text-light">{feature.label}：{feature.included}</span>
              </>
            ) : feature.included ? (
              <>
                <span className="text-accent">✓</span>
                <span className="text-text">{feature.label}</span>
              </>
            ) : (
              <>
                <span className="text-gray-300">✗</span>
                <span className="text-text-light">{feature.label}</span>
              </>
            )}
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-2.5 rounded-lg font-medium text-sm transition-colors ${
          highlighted
            ? "bg-primary text-white hover:bg-primary/90"
            : "bg-light-bg text-text hover:bg-gray-200"
        }`}
      >
        {ctaLabel}
      </button>
    </motion.div>
  );
}
