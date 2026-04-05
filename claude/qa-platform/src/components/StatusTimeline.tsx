"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Step {
  label: string;
  completed: boolean;
}

interface StatusTimelineProps {
  steps: Step[];
  animateSequentially?: boolean;
  animationDelay?: number;
}

export default function StatusTimeline({
  steps: initialSteps,
  animateSequentially = false,
  animationDelay = 1000,
}: StatusTimelineProps) {
  const [steps, setSteps] = useState(initialSteps);

  useEffect(() => {
    if (!animateSequentially) return;

    const timers: NodeJS.Timeout[] = [];
    initialSteps.forEach((_, index) => {
      const timer = setTimeout(() => {
        setSteps((prev) =>
          prev.map((step, i) =>
            i <= index ? { ...step, completed: true } : step
          )
        );
      }, (index + 1) * animationDelay);
      timers.push(timer);
    });

    return () => timers.forEach(clearTimeout);
  }, [animateSequentially, animationDelay, initialSteps]);

  return (
    <div className="flex items-center gap-0 w-full">
      {steps.map((step, index) => (
        <div key={step.label} className="flex items-center flex-1">
          <div className="flex flex-col items-center flex-1">
            <motion.div
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={
                step.completed
                  ? { scale: 1, opacity: 1 }
                  : { scale: 0.8, opacity: 0.5 }
              }
              transition={{ duration: 0.3 }}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                step.completed
                  ? "bg-accent text-white"
                  : "bg-gray-200 text-text-light"
              }`}
            >
              {step.completed ? "✓" : index + 1}
            </motion.div>
            <p
              className={`text-xs mt-2 text-center ${
                step.completed ? "text-accent font-medium" : "text-text-light"
              }`}
            >
              {step.label}
            </p>
          </div>
          {index < steps.length - 1 && (
            <div className="h-0.5 w-full mx-1 relative -top-3">
              <div className="h-full bg-gray-200 rounded" />
              <motion.div
                initial={{ width: "0%" }}
                animate={step.completed ? { width: "100%" } : { width: "0%" }}
                transition={{ duration: 0.5 }}
                className="h-full bg-accent rounded absolute top-0 left-0"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
