
import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle system with red theme
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    // Red futuristic color palette
    const colors = ["#dc2626", "#ef4444", "#f97316", "#facc15", "#fb7185"];

    // Create particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.7 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    // Futuristic city buildings
    const buildings: Array<{
      x: number;
      width: number;
      height: number;
      lights: Array<{ x: number; y: number; opacity: number }>;
    }> = [];

    // Create city skyline
    for (let i = 0; i < 15; i++) {
      const building = {
        x: (canvas.width / 15) * i,
        width: canvas.width / 15 + Math.random() * 20,
        height: Math.random() * 200 + 100,
        lights: [] as Array<{ x: number; y: number; opacity: number }>
      };

      // Add lights to buildings
      for (let j = 0; j < Math.random() * 8 + 3; j++) {
        building.lights.push({
          x: building.x + Math.random() * building.width,
          y: canvas.height - Math.random() * building.height,
          opacity: Math.random()
        });
      }

      buildings.push(building);
    }

    // Globe animation variables
    let globeRotation = 0;
    const globeX = canvas.width * 0.8;
    const globeY = canvas.height * 0.3;
    const globeRadius = 80;

    const animate = () => {
      // Red gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#450a0a");
      gradient.addColorStop(0.5, "#7f1d1d");
      gradient.addColorStop(1, "#1f2937");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw futuristic city skyline
      buildings.forEach(building => {
        // Building silhouette
        ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
        ctx.fillRect(building.x, canvas.height - building.height, building.width, building.height);

        // Building lights
        building.lights.forEach(light => {
          light.opacity = Math.sin(Date.now() * 0.001 + light.x * 0.01) * 0.5 + 0.5;
          ctx.fillStyle = `rgba(255, 255, 100, ${light.opacity})`;
          ctx.fillRect(light.x, light.y, 3, 3);
        });

        // Building outline glow
        ctx.strokeStyle = "rgba(220, 38, 38, 0.3)";
        ctx.lineWidth = 1;
        ctx.strokeRect(building.x, canvas.height - building.height, building.width, building.height);
      });

      // Draw animated globe
      ctx.save();
      ctx.translate(globeX, globeY);
      ctx.rotate(globeRotation);

      // Globe outer circle
      ctx.beginPath();
      ctx.arc(0, 0, globeRadius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(220, 38, 38, 0.1)";
      ctx.fill();
      ctx.strokeStyle = "rgba(220, 38, 38, 0.6)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Globe grid lines
      ctx.strokeStyle = "rgba(220, 38, 38, 0.4)";
      ctx.lineWidth = 1;
      
      // Vertical lines
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(Math.cos(angle) * globeRadius, Math.sin(angle) * globeRadius);
        ctx.lineTo(Math.cos(angle + Math.PI) * globeRadius, Math.sin(angle + Math.PI) * globeRadius);
        ctx.stroke();
      }

      // Horizontal lines
      for (let i = 1; i < 4; i++) {
        const y = (globeRadius * 2 / 4) * i - globeRadius;
        const radius = Math.sqrt(globeRadius * globeRadius - y * y);
        ctx.beginPath();
        ctx.arc(0, y, radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.restore();
      globeRotation += 0.005;

      // Update and draw particles
      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = particle.color;
            ctx.globalAlpha = (120 - distance) / 120 * 0.3;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });
      });

      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default AnimatedBackground;
