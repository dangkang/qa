"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimelineStep {
  label: string;
  description?: string;
}

interface StatusTimelineProps {
  steps: TimelineStep[];
  autoAdvance?: boolean;
  advanceInterval?: number;
  onAllComplete?: () => void;
}

export default function StatusTimeline({
  steps,
  autoAdvance = true,
  advanceInterval = 2000,
  onAllComplete,
}: StatusTimelineProps) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (!autoAdvance) return;
    if (currentStep >= steps.length) {
      onAllComplete?.();
      return;
    }

    const timer = setTimeout(() => {
      setCurrentStep((prev) => prev + 1);
    }, advanceInterval);

    return () => clearTimeout(timer);
  }, [currentStep, autoAdvance, advanceInterval, steps.length, onAllComplete]);

  return (
    <div className="flex items-center justify-between w-full max-w-2xl mx-auto">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center flex-1">
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{
                scale: index < currentStep ? 1 : 0.8,
                backgroundColor:
                  index < currentStep
                    ? "#20BF55"
                    : index === currentStep
                    ? "#01BAEF"
                    : "#E5E7EB",
              }}
              transition={{ duration: 0.4 }}
              className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
            >
              {index < currentStep ? "✓" : index + 1}
            </motion.div>
            <p
              className={`text-xs mt-2 text-center font-medium ${
                index < currentStep
                  ? "text-accent"
                  : index === currentStep
                  ? "text-secondary"
                  : "text-text-light"
              }`}
            >
              {step.label}
            </p>
          </div>
          {index < steps.length - 1 && (
            <div className="flex-1 h-1 mx-2 mt-[-20px] rounded-full overflow-hidden bg-gray-200">
              <motion.div
                initial={{ width: "0%" }}
                animate={{
                  width: index < currentStep ? "100%" : "0%",
                }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-full bg-accent rounded-full"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
