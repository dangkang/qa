"use client";

import { useState, useEffect } from "react";

interface StreamingTextProps {
  sections: {
    type: "heading" | "paragraph" | "citation" | "divider" | "warning" | "cta";
    content: string;
    subContent?: string;
  }[];
  speed?: number;
  onComplete?: () => void;
}

export default function StreamingText({
  sections,
  speed = 15,
  onComplete,
}: StreamingTextProps) {
  const [visibleSections, setVisibleSections] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (visibleSections >= sections.length) {
      setIsTyping(false);
      onComplete?.();
      return;
    }

    const section = sections[visibleSections];
    const fullText = section.content;

    if (currentText.length < fullText.length) {
      const timer = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setVisibleSections((prev) => prev + 1);
        setCurrentText("");
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [visibleSections, currentText, sections, speed, onComplete]);

  const renderSection = (
    section: (typeof sections)[0],
    text: string,
    index: number,
    isCurrent: boolean
  ) => {
    switch (section.type) {
      case "heading":
        return (
          <h3 key={index} className="text-lg font-bold text-dark mt-6 mb-3">
            {text}
            {isCurrent && isTyping && <span className="typing-cursor" />}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="text-text leading-relaxed mb-4">
            {text}
            {isCurrent && isTyping && <span className="typing-cursor" />}
          </p>
        );
      case "citation":
        return (
          <div
            key={index}
            className="citation-highlight bg-primary/5 border-l-4 border-primary rounded-r-lg p-4 my-4"
          >
            <div className="flex items-start gap-2">
              <span className="text-lg">📎</span>
              <div>
                <p className="text-sm font-medium text-primary mb-1">
                  {section.subContent}
                </p>
                <p className="text-sm text-text-light leading-relaxed">
                  {text}
                  {isCurrent && isTyping && <span className="typing-cursor" />}
                </p>
              </div>
            </div>
          </div>
        );
      case "divider":
        return <hr key={index} className="my-6 border-gray-200" />;
      case "warning":
        return (
          <div key={index} className="bg-gold/10 border border-gold/30 rounded-lg p-4 my-4">
            <p className="text-sm text-text leading-relaxed">
              {text}
              {isCurrent && isTyping && <span className="typing-cursor" />}
            </p>
          </div>
        );
      case "cta":
        return (
          <div key={index} className="flex flex-col gap-2 mt-2">
            <p className="text-sm text-text-light">
              {text}
              {isCurrent && isTyping && <span className="typing-cursor" />}
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {sections.map((section, index) => {
        if (index < visibleSections) {
          return renderSection(section, section.content, index, false);
        }
        if (index === visibleSections) {
          return renderSection(section, currentText, index, true);
        }
        return null;
      })}
    </div>
  );
}
