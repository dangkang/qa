"use client";

import { motion } from "framer-motion";

interface PricingFeature {
  label: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  price: string;
  priceUnit?: string;
  features: PricingFeature[];
  highlighted?: boolean;
  ctaLabel: string;
  delay?: number;
}

export default function PricingCard({
  name,
  price,
  priceUnit = "",
  features,
  highlighted = false,
  ctaLabel,
  delay = 0,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-2xl p-6 flex flex-col ${
        highlighted
          ? "bg-primary text-white shadow-xl scale-105 border-2 border-primary"
          : "bg-white text-text border-2 border-gray-200"
      }`}
    >
      <h3
        className={`text-lg font-bold mb-2 ${
          highlighted ? "text-white" : "text-dark"
        }`}
      >
        {name}
      </h3>
      <div className="mb-6">
        <span
          className={`text-3xl font-bold ${
            highlighted ? "text-white" : "text-primary"
          }`}
        >
          {price}
        </span>
        {priceUnit && (
          <span
            className={`text-sm ml-1 ${
              highlighted ? "text-white/80" : "text-text-light"
            }`}
          >
            {priceUnit}
          </span>
        )}
      </div>
      <ul className="space-y-3 flex-1 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm">
            {feature.included ? (
              <span
                className={`text-base ${
                  highlighted ? "text-accent" : "text-accent"
                }`}
              >
                ✓
              </span>
            ) : (
              <span
                className={`text-base ${
                  highlighted ? "text-white/40" : "text-gray-300"
                }`}
              >
                ✕
              </span>
            )}
            <span
              className={
                feature.included
                  ? ""
                  : highlighted
                  ? "text-white/40"
                  : "text-gray-400"
              }
            >
              {feature.label}
            </span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-3 rounded-lg font-medium text-sm transition-colors ${
          highlighted
            ? "bg-white text-primary hover:bg-white/90"
            : "bg-primary text-white hover:bg-primary/90"
        }`}
      >
        {ctaLabel}
      </button>
    </motion.div>
  );
}
