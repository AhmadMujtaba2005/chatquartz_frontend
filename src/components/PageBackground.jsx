"use client";
import { useEffect, useRef } from "react";

export default function PageBackground({ variant = "network" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let frame = 0;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    // --- FEATURES: interconnected particle network (capabilities linking together) ---
    let particles = [];
    function initNetwork() {
      const count = Math.min(50, Math.floor((canvas.width * canvas.height) / 18000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width, y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      }));
    }
    function drawNetwork() {
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(43,100,253,0.7)"; ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(43,100,253,${(1 - dist / 130) * 0.4})`; ctx.lineWidth = 1.5; ctx.stroke();
          }
        }
      }
    }


    // --- MARKETING: Animated users/leads flowing into a chat widget (conversion funnel) ---
    let leads = [];
    function initMarketing() {
      leads = Array.from({ length: 18 }, (_, i) => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vy: Math.random() * 0.4 + 0.15,
        vx: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 5 + 5,
        opacity: Math.random() * 0.4 + 0.2,
        phase: Math.random() * Math.PI * 2,
        isConverted: Math.random() > 0.6,
      }));
    }
    function drawMarketing() {
      const t = frame * 0.012;
      // Draw a chat widget in the bottom-right corner
      const wx = canvas.width * 0.82, wy = canvas.height * 0.65;
      const ww = 160, wh = 90;

      // Widget background
      ctx.save();
      ctx.globalAlpha = 0.18;
      ctx.fillStyle = "#2B64FD";
      if (ctx.roundRect) {
        ctx.beginPath(); ctx.roundRect(wx, wy, ww, wh, 16); ctx.fill();
      } else { ctx.fillRect(wx, wy, ww, wh); }
      ctx.globalAlpha = 1;
      // Widget header bar
      ctx.fillStyle = "rgba(43,100,253,0.55)";
      if (ctx.roundRect) {
        ctx.beginPath(); ctx.roundRect(wx, wy, ww, 28, [16,16,0,0]); ctx.fill();
      } else { ctx.fillRect(wx, wy, ww, 28); }
      // Message bubbles inside widget
      ctx.fillStyle = "rgba(43,100,253,0.4)";
      if (ctx.roundRect) {
        ctx.beginPath(); ctx.roundRect(wx + 8, wy + 36, 70, 14, 7); ctx.fill();
        ctx.fillStyle = "rgba(170,200,253,0.5)";
        ctx.beginPath(); ctx.roundRect(wx + ww - 78, wy + 58, 66, 14, 7); ctx.fill();
      }
      // Pulsing ring around widget
      const pulse = Math.sin(t * 2) * 0.5 + 0.5;
      ctx.globalAlpha = pulse * 0.15;
      ctx.beginPath();
      ctx.arc(wx + ww / 2, wy + wh / 2, (ww / 2 + 20) + pulse * 10, 0, Math.PI * 2);
      ctx.strokeStyle = "#2B64FD";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.globalAlpha = 1;
      ctx.restore();

      // Draw lead dots flowing toward the widget
      leads.forEach((l) => {
        // Drift toward the widget
        const targetX = wx + ww / 2, targetY = wy + wh / 2;
        const dx = targetX - l.x, dy = targetY - l.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 30) {
          // Reset - "converted" lead goes back to top
          l.x = Math.random() * canvas.width;
          l.y = -20;
          l.isConverted = Math.random() > 0.5;
        }
        l.x += (dx / dist) * 0.4 + l.vx;
        l.y += (dy / dist) * 0.4 + l.vy * 0.3;

        const currentOpacity = l.opacity + Math.sin(frame * 0.03 + l.phase) * 0.1;
        ctx.save();
        // Draw user avatar circle
        ctx.beginPath();
        ctx.arc(l.x, l.y, l.radius, 0, Math.PI * 2);
        ctx.fillStyle = l.isConverted
          ? `rgba(170,200,253,${Math.max(0, currentOpacity)})`
          : `rgba(43,100,253,${Math.max(0, currentOpacity)})`;
        ctx.fill();
        // Small dot connection line to widget
        if (dist < 180) {
          ctx.beginPath();
          ctx.moveTo(l.x, l.y);
          ctx.lineTo(targetX, targetY);
          ctx.strokeStyle = l.isConverted
            ? `rgba(170,200,253,${(1 - dist / 180) * 0.18})`
            : `rgba(43,100,253,${(1 - dist / 180) * 0.12})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        ctx.restore();
      });
    }

    // --- PRICING: gently rising bars (growth / value climbing) ---
    let bars = [];
    function initPricing() {
      const barCount = Math.max(10, Math.floor(canvas.width / 100));
      bars = Array.from({ length: barCount }, (_, i) => ({
        x: (canvas.width / barCount) * i + (canvas.width / barCount) * 0.15,
        baseHeight: 90 + Math.random() * 180,
        phase: Math.random() * Math.PI * 2,
      }));
    }
    function drawPricing() {
      const t = frame / 50;
      const bottomY = canvas.height;
      const barWidth = Math.min(42, (canvas.width / bars.length) * 0.6);

      bars.forEach((b) => {
        const h = b.baseHeight + Math.sin(t + b.phase) * 24;
        const y = bottomY - h;
        ctx.fillStyle = "rgba(43,100,253,0.3)";

        if (ctx.roundRect) {
          ctx.beginPath();
          ctx.roundRect(b.x, y, barWidth, h, [10, 10, 0, 0]);
          ctx.fill();
        } else {
          ctx.fillRect(b.x, y, barWidth, h);
        }
      });
    }


    // --- SUPPORT: Live chat conversation threads appearing and fading ---
    let threads = [];
    function initSupport() {
      threads = Array.from({ length: 7 }, (_, i) => ({
        x: canvas.width * (0.05 + i * 0.135),
        y: canvas.height * (0.15 + Math.random() * 0.6),
        messages: 2 + Math.floor(Math.random() * 3),
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.008 + 0.006,
        isAgent: Math.random() > 0.5,
      }));
    }
    function drawSupport() {
      const t = frame;
      threads.forEach((thread) => {
        const lifeCycle = (t * thread.speed + thread.phase) % (Math.PI * 2);
        const alpha = Math.max(0, Math.sin(lifeCycle) * 0.6);
        const bobY = Math.sin(t * 0.012 + thread.phase) * 10;

        ctx.save();
        let currentY = thread.y + bobY;
        const bubbleW = 100 + thread.messages * 8;

        for (let m = 0; m < thread.messages; m++) {
          const isRight = (m + (thread.isAgent ? 1 : 0)) % 2 === 0;
          const bubbleX = isRight ? thread.x : thread.x - bubbleW + 20;
          const bubbleH = 22;
          const bubbleColor = isRight
            ? `rgba(43,100,253,${alpha * 0.85})`
            : `rgba(170,200,253,${alpha * 0.65})`;

          ctx.fillStyle = bubbleColor;
          if (ctx.roundRect) {
            ctx.beginPath(); ctx.roundRect(bubbleX, currentY, bubbleW, bubbleH, 10); ctx.fill();
          } else {
            ctx.fillRect(bubbleX, currentY, bubbleW, bubbleH);
          }
          // Text lines
          ctx.fillStyle = `rgba(255,255,255,${alpha * 0.6})`;
          ctx.fillRect(bubbleX + 8, currentY + 7, bubbleW * 0.55, 5);
          ctx.fillStyle = `rgba(255,255,255,${alpha * 0.35})`;
          ctx.fillRect(bubbleX + 8, currentY + 15, bubbleW * 0.35, 4);

          currentY += bubbleH + 8;
        }

        // Typing indicator on last bubble (3 animated dots)
        if (alpha > 0.3) {
          const dotY = currentY + 8;
          const dotX = thread.isAgent ? thread.x + 10 : thread.x - 40;
          for (let d = 0; d < 3; d++) {
            const dotPulse = Math.sin(t * 0.08 + d * 0.8 + thread.phase);
            const dotAlpha = alpha * (0.4 + dotPulse * 0.3);
            ctx.beginPath();
            ctx.arc(dotX + d * 10, dotY + dotPulse * 2, 3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(43,100,253,${Math.max(0, dotAlpha)})`;
            ctx.fill();
          }
        }
        ctx.restore();
      });
    }


    function loop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (variant === "network") drawNetwork();
      if (variant === "marketing") drawMarketing();
      if (variant === "pricing") drawPricing();
      if (variant === "support") drawSupport();
      frame++;
      if (!prefersReducedMotion) animationId = requestAnimationFrame(loop);
    }

    resize();
    if (variant === "network") initNetwork();
    if (variant === "marketing") initMarketing();
    if (variant === "pricing") initPricing();
    if (variant === "support") initSupport();
    loop();

    const onResize = () => {
      resize();
      if (variant === "network") initNetwork();
      if (variant === "marketing") initMarketing();
      if (variant === "pricing") initPricing();
      if (variant === "support") initSupport();
    };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(animationId); window.removeEventListener("resize", onResize); };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
