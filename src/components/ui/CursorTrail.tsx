"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

const PARTICLE_COUNT = 12;

export function CursorTrail() {
  const particlesRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const touchDevice = window.matchMedia("(hover: none), (pointer: coarse)");

    if (reducedMotion.matches || touchDevice.matches) return;

    const positions = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    }));
    let target = { x: positions[0].x, y: positions[0].y };
    let animationFrame = 0;

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      target = { x: event.clientX, y: event.clientY };
    };

    const animate = () => {
      positions.forEach((position, index) => {
        const destination = index === 0 ? target : positions[index - 1];
        const easing = index === 0 ? 0.32 : 0.2;
        position.x += (destination.x - position.x) * easing;
        position.y += (destination.y - position.y) * easing;

        const particle = particlesRef.current[index];
        particle?.style.setProperty("transform", `translate3d(${position.x}px, ${position.y}px, 0)`);
      });

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="cursor-trail" aria-hidden="true">
      {Array.from({ length: PARTICLE_COUNT }, (_, index) => (
        <span
          key={index}
          ref={(particle) => {
            particlesRef.current[index] = particle;
          }}
          className="cursor-trail__particle"
          style={{ "--particle-index": index } as CSSProperties}
        />
      ))}
    </div>
  );
}
