"use client";
import { useEffect, useRef } from "react";

const PageBackground = ({ variant = "network" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId;
    let frame = 0;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    // --- Features Network ---
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


    // --- Marketing Leads ---
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
      // Chat Widget
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
      // Message Bubbles
      ctx.fillStyle = "rgba(43,100,253,0.4)";
      if (ctx.roundRect) {
        ctx.beginPath(); ctx.roundRect(wx + 8, wy + 36, 70, 14, 7); ctx.fill();
        ctx.fillStyle = "rgba(170,200,253,0.5)";
        ctx.beginPath(); ctx.roundRect(wx + ww - 78, wy + 58, 66, 14, 7); ctx.fill();
      }
      // Pulsing Ring
      const pulse = Math.sin(t * 2) * 0.5 + 0.5;
      ctx.globalAlpha = pulse * 0.15;
      ctx.beginPath();
      ctx.arc(wx + ww / 2, wy + wh / 2, (ww / 2 + 20) + pulse * 10, 0, Math.PI * 2);
      ctx.strokeStyle = "#2B64FD";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.globalAlpha = 1;
      ctx.restore();

      // Leads
      leads.forEach((l) => {
        // Target Position
        const targetX = wx + ww / 2, targetY = wy + wh / 2;
        const dx = targetX - l.x, dy = targetY - l.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 30) {
          // Reset Lead
          l.x = Math.random() * canvas.width;
          l.y = -20;
          l.isConverted = Math.random() > 0.5;
        }
        l.x += (dx / dist) * 0.4 + l.vx;
        l.y += (dy / dist) * 0.4 + l.vy * 0.3;

        const currentOpacity = l.opacity + Math.sin(frame * 0.03 + l.phase) * 0.1;
        ctx.save();
        // Avatar
        ctx.beginPath();
        ctx.arc(l.x, l.y, l.radius, 0, Math.PI * 2);
        ctx.fillStyle = l.isConverted
          ? `rgba(170,200,253,${Math.max(0, currentOpacity)})`
          : `rgba(43,100,253,${Math.max(0, currentOpacity)})`;
        ctx.fill();
        // Connection Line
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


    // --- Pricing Curves ---
    let curves = [];
    let pricingParticles = [];
    
    function initPricing() {
      curves = [
        { speed: 0.005, amp: 30, baseHeight: 0.75, color: '43, 100, 253' }, // brand-primary
        { speed: 0.003, amp: 50, baseHeight: 0.85, color: '96, 165, 250' }, // blue-400
        { speed: 0.002, amp: 70, baseHeight: 0.95, color: '170, 200, 253' } // light blue
      ];
      
      const count = 30;
      pricingParticles = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.4 + 0.2,
        opacity: Math.random() * 0.5 + 0.2
      }));
    }

    function drawPricing() {
      const t = frame;
      
      // Waves
      curves.forEach((curve, index) => {
        const yOffset = canvas.height * curve.baseHeight;
        
        ctx.beginPath();
        ctx.moveTo(0, canvas.height); // Start Path
        
        let prevX = 0;
        let prevY = yOffset + Math.sin(t * curve.speed) * curve.amp;
        ctx.lineTo(prevX, prevY);

        const segments = 8;
        for (let i = 1; i <= segments; i++) {
          const x = (canvas.width / segments) * i;
          // Curve Calculation
          const growthOffset = (Math.pow(i / segments, 2.5)) * (canvas.height * 0.55); 
          const wavePhase = i * 0.8 + (index * 2);
          const y = yOffset - growthOffset + Math.sin(t * curve.speed + wavePhase) * curve.amp;
          
          const cpX1 = prevX + (x - prevX) / 2.5;
          const cpX2 = prevX + (x - prevX) / 2;
          ctx.bezierCurveTo(cpX1, prevY, cpX2, y, x, y);
          
          prevX = x;
          prevY = y;
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.closePath();

        // Gradient Fill
        const grad = ctx.createLinearGradient(0, canvas.height * 0.1, 0, canvas.height);
        grad.addColorStop(0, `rgba(${curve.color}, 0.20)`);
        grad.addColorStop(1, `rgba(${curve.color}, 0)`);
        ctx.fillStyle = grad;
        ctx.fill();

        // Stroke
        ctx.beginPath();
        prevX = 0;
        prevY = yOffset + Math.sin(t * curve.speed) * curve.amp;
        ctx.moveTo(prevX, prevY);
        
        for (let i = 1; i <= segments; i++) {
          const x = (canvas.width / segments) * i;
          const growthOffset = (Math.pow(i / segments, 2.5)) * (canvas.height * 0.55); 
          const wavePhase = i * 0.8 + (index * 2);
          const y = yOffset - growthOffset + Math.sin(t * curve.speed + wavePhase) * curve.amp;
          
          const cpX1 = prevX + (x - prevX) / 2.5;
          const cpX2 = prevX + (x - prevX) / 2;
          ctx.bezierCurveTo(cpX1, prevY, cpX2, y, x, y);
          
          prevX = x;
          prevY = y;
        }
        ctx.strokeStyle = `rgba(${curve.color}, 0.55)`;
        ctx.lineWidth = 2.5;
        ctx.stroke();
      });

      // Particles
      pricingParticles.forEach((p) => {
        p.y -= p.speed;
        p.x += Math.sin(t * 0.02 + p.y * 0.01) * 0.5;
        
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        // Opacity
        const fade = Math.min(1, Math.max(0, p.y / (canvas.height * 0.8)));
        ctx.fillStyle = `rgba(43,100,253, ${p.opacity * fade})`; 
        ctx.fill();
      });
    }

    // --- Support Chat ---
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

        // Typing Indicator
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
};

export default PageBackground;

export function HeroNetworkCanvas({ animated = false }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    
    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];
    let time = 0;
    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let width = 0;
    let height = 0;

    function initParticles() {
      const count = 75; 
      particles = Array.from({ length: count }, (_, i) => {
        return createParticle(true);
      });
    }

    function createParticle(randomY = false) {
      const x = width * Math.random();
      const y = Math.random() * height;
      const z = Math.random();

      return {
        id: Math.random(),
        x,
        y,
        z,
        baseX: x, 
        baseY: y,
        wiggleSpeed: 0.001 + Math.random() * 0.002,
        wiggleAmp: 10 + Math.random() * 30,
        radius: 1 + z * 3,
        phase: Math.random() * Math.PI * 2,
        isDataPacket: Math.random() > 0.85, 
      };
    }

    function draw() {
      if (width === 0 || height === 0) {
        if (animated) animationId = requestAnimationFrame(draw);
        return;
      }
      
      time += 1;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      particles.forEach((p, index) => {
        p.x = p.baseX + Math.sin(time * p.wiggleSpeed + p.phase) * p.wiggleAmp;
        p.y = p.baseY + Math.cos(time * p.wiggleSpeed + p.phase) * (p.wiggleAmp * 0.5);

        const parallaxX = mouse.x * (p.z * 40);
        const parallaxY = mouse.y * (p.z * 40);
        
        const finalX = p.x + parallaxX;
        const finalY = p.y + parallaxY;

        let connectionsDrawn = 0;
        for (let j = index + 1; j < particles.length; j++) {
          if (connectionsDrawn >= 2) break; 

          const other = particles[j];
          const otherFinalX = other.x + mouse.x * (other.z * 40);
          const otherFinalY = other.y + mouse.y * (other.z * 40);

          const dx = finalX - otherFinalX;
          const dy = finalY - otherFinalY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          const maxDist = 120 + (p.z * 80); 

          if (dist < maxDist) {
            connectionsDrawn++;
            const distOpacity = 1 - (dist / maxDist);
            const opacity = distOpacity * 0.7 * (p.z + 0.2);

            ctx.beginPath();
            ctx.moveTo(finalX, finalY);
            ctx.quadraticCurveTo(
              (finalX + otherFinalX) / 2, 
              (finalY + otherFinalY) / 2 - 20, 
              otherFinalX, 
              otherFinalY
            );
            ctx.strokeStyle = `rgba(43,100,253,${opacity})`;
            ctx.lineWidth = 1.0 + (p.z * 0.8);
            ctx.stroke();
          }
        }

        const glow = Math.sin(time * 0.03 + p.phase) * 0.5 + 0.5;
        const alpha = (0.55 + (p.z * 0.5) + (glow * 0.3));

        if (p.isDataPacket) {
          const grad = ctx.createRadialGradient(finalX, finalY, 0, finalX, finalY, p.radius * 6);
          grad.addColorStop(0, `rgba(43,100,253,${alpha * 0.55})`);
          grad.addColorStop(1, "rgba(43,100,253,0)");
          ctx.beginPath();
          ctx.arc(finalX, finalY, p.radius * 6, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(finalX, finalY, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.isDataPacket 
          ? `rgba(43,100,253,${alpha * 0.8})` 
          : `rgba(96,165,250,${alpha * 0.85})`; 
        ctx.fill();
      });

      if (animated) {
        animationId = requestAnimationFrame(draw);
      }
    }

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.target === container) {
          const { width: w, height: h } = entry.contentRect;
          if (w > 0 && h > 0) {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            ctx.scale(dpr, dpr);
            width = w;
            height = h;
            initParticles();
          }
        }
      }
    });
    
    resizeObserver.observe(container);
    if (animated) draw();

    const onMouseMove = (e) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [animated]);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-100"
        style={{
          // CSS Masks
          maskImage: "radial-gradient(ellipse 55% 45% at 50% 45%, transparent 25%, black 65%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 55% 45% at 50% 45%, transparent 25%, black 65%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
    </div>
  );
}
