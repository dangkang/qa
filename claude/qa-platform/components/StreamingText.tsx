"use client";

import { motion } from "framer-motion";

interface StreamingSection {
  type: "heading" | "paragraph" | "citation" | "warning";
  content: string;
}

interface StreamingTextProps {
  sections: StreamingSection[];
  startDelay?: number;
}

export default function StreamingText({
  sections,
  startDelay = 0,
}: StreamingTextProps) {
  return (
    <div className="space-y-4">
      {sections.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: startDelay + index * 0.8,
          }}
        >
          {section.type === "heading" && (
            <h3 className="text-lg font-bold text-dark mt-6 mb-2">
              {section.content}
            </h3>
          )}
          {section.type === "paragraph" && (
            <p className="text-text leading-relaxed text-[15px]">
              {section.content}
            </p>
          )}
          {section.type === "citation" && (
            <div className="bg-secondary/5 border-l-4 border-secondary rounded-r-lg p-4 my-3">
              <p className="text-sm text-text leading-relaxed">
                <span className="inline-block mr-1">📌</span>
                {section.content}
              </p>
            </div>
          )}
          {section.type === "warning" && (
            <div className="bg-gold/10 border border-gold/30 rounded-lg p-4 mt-6">
              <p className="text-sm text-text-light leading-relaxed">
                <span className="inline-block mr-1">⚠️</span>
                {section.content}
              </p>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
