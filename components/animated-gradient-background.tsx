"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/components/optimized-animations";

export function AnimatedGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      // Redraw static version if reduced motion is preferred
      if (prefersReducedMotion) {
        drawStaticBackground(ctx, width, height);
      }
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Colors from our theme
    const colors = [
      [0, 123, 255], // Electric Blue (primary)
      [106, 27, 154], // Royal Purple (highlight)
      [255, 193, 7], // Amber (accent)
      [165, 214, 167], // Mint Green
    ];

    // Draw static background for users who prefer reduced motion
    function drawStaticBackground(
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number
    ) {
      ctx.clearRect(0, 0, width, height);

      // Draw static blobs
      for (let i = 0; i < 6; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const radius = Math.random() * 100 + 50;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const opacity = Math.random() * 0.2 + 0.1;

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${opacity})`;
        ctx.fill();
      }
    }

    class Blob {
      x: number;
      y: number;
      radius: number;
      color: number[];
      vx: number;
      vy: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = Math.random() * 100 + 50;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.vx = Math.random() * 0.2 - 0.1;
        this.vy = Math.random() * 0.2 - 0.1;
        this.opacity = Math.random() * 0.2 + 0.1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, ${this.opacity})`;
        ctx.fill();
      }
    }

    const blobs: Blob[] = [];
    for (let i = 0; i < 6; i++) {
      blobs.push(new Blob());
    }

    // If user prefers reduced motion, just draw a static version
    if (prefersReducedMotion) {
      drawStaticBackground(ctx, width, height);
    } else {
      // Otherwise animate
      const animate = () => {
        ctx.clearRect(0, 0, width, height);

        blobs.forEach((blob) => {
          blob.update();
          blob.draw(ctx);
        });

        animationFrameRef.current = requestAnimationFrame(animate);
      };

      animate();
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10 opacity-30"
      style={{ filter: "blur(100px)" }}
      aria-hidden="true"
    />
  );
}
