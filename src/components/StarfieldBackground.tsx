import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
}

interface Meteor {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

const StarfieldBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const starsRef = useRef<Star[]>([]);
  const meteorsRef = useRef<Meteor[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initStars = () => {
      const stars: Star[] = [];
      const numStars = Math.min(200, Math.floor((canvas.width * canvas.height) / 8000));
      
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 1000,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          life: 0,
        });
      }
      starsRef.current = stars;
    };

    const initMeteors = () => {
      const meteors: Meteor[] = [];
      const numMeteors = 3;
      
      for (let i = 0; i < numMeteors; i++) {
        meteors.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 0,
          maxLife: Math.random() * 200 + 100,
        });
      }
      meteorsRef.current = meteors;
    };

    const updateStars = () => {
      starsRef.current.forEach(star => {
        star.x += star.vx;
        star.y += star.vy;
        
        // Wrap around screen
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;
        
        // Mouse interaction - stars move away from cursor
        const dx = star.x - mouseRef.current.x;
        const dy = star.y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          star.vx += (dx / distance) * force * 0.01;
          star.vy += (dy / distance) * force * 0.01;
        }
        
        // Apply friction
        star.vx *= 0.99;
        star.vy *= 0.99;
      });
    };

    const updateMeteors = () => {
      meteorsRef.current.forEach(meteor => {
        meteor.x += meteor.vx;
        meteor.y += meteor.vy;
        meteor.life++;
        
        if (meteor.life > meteor.maxLife || meteor.x < -50 || meteor.x > canvas.width + 50 || meteor.y < -50 || meteor.y > canvas.height + 50) {
          meteor.x = Math.random() * canvas.width;
          meteor.y = Math.random() * canvas.height;
          meteor.life = 0;
          meteor.vx = (Math.random() - 0.5) * 2;
          meteor.vy = (Math.random() - 0.5) * 2;
        }
      });
    };

    const drawStars = () => {
      ctx.save();
      
      starsRef.current.forEach(star => {
        const alpha = star.opacity * (1 - star.life / 1000);
        
        // Create gradient for star
        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 3);
        gradient.addColorStop(0, `rgba(0, 255, 255, ${alpha})`);
        gradient.addColorStop(0.5, `rgba(122, 63, 242, ${alpha * 0.5})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Core star
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      ctx.restore();
    };

    const drawMeteors = () => {
      ctx.save();
      
      meteorsRef.current.forEach(meteor => {
        const alpha = 1 - (meteor.life / meteor.maxLife);
        const trailLength = 20;
        
        // Draw meteor trail
        const gradient = ctx.createLinearGradient(
          meteor.x - meteor.vx * trailLength,
          meteor.y - meteor.vy * trailLength,
          meteor.x,
          meteor.y
        );
        gradient.addColorStop(0, `rgba(0, 255, 255, 0)`);
        gradient.addColorStop(0.5, `rgba(122, 63, 242, ${alpha * 0.5})`);
        gradient.addColorStop(1, `rgba(255, 91, 239, ${alpha})`);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(meteor.x - meteor.vx * trailLength, meteor.y - meteor.vy * trailLength);
        ctx.lineTo(meteor.x, meteor.y);
        ctx.stroke();
        
        // Meteor head
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(meteor.x, meteor.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      });
      
      ctx.restore();
    };

    const animate = () => {
      ctx.fillStyle = '#0B0E26';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      updateStars();
      updateMeteors();
      drawStars();
      drawMeteors();
      
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    // Initialize
    resizeCanvas();
    initStars();
    initMeteors();
    
    // Event listeners
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Start animation
    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="canvas-container"
      style={{ background: '#0B0E26' }}
    />
  );
};

export default StarfieldBackground;
