"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  direction = "up",
}) {
  const elementRef = useRef(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const element = elementRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {

          setVisible(true);

          observer.disconnect();

        }

      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();

  }, []);

  return (
    <div
      ref={elementRef}
      className={`reveal reveal-${direction} ${
        visible ? "reveal-visible" : ""
      }`}
    >
      {children}
    </div>
  );
}