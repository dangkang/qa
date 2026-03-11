"use client";

import { useState, useEffect } from "react";

interface TypeWriterProps {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
  className?: string;
  showCursor?: boolean;
}

export default function TypeWriter({
  text,
  speed = 50,
  delay = 0,
  onComplete,
  className = "",
  showCursor = true,
}: TypeWriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(delayTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    if (displayText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    } else {
      onComplete?.();
    }
  }, [displayText, started, text, speed, onComplete]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && displayText.length < text.length && (
        <span className="typing-cursor" />
      )}
    </span>
  );
}
