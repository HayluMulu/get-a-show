import { useEffect, useRef } from "react";

export const useStarfield = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const stars: {
      x: number;
      y: number;
      dx: number;
      dy: number;
      radius: number;
    }[] = [];

    const meteors: {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      alpha: number;
    }[] = [];

    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.2 + 0.5,
      });
    }

    let lastMeteorTime = 0;

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // ציור כוכבים
      stars.forEach((star) => {
        star.x += star.dx;
        star.y += star.dy;

        // החזרה של כוכבים ש"בורחים" מהמסך
        if (star.x < 0 || star.x > width || star.y < 0 || star.y > height) {
          star.x = Math.random() * width;
          star.y = Math.random() * height;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fillStyle = "white";
        ctx.fill();
      });

      // יצירת מטאור
      if (time - lastMeteorTime > 3000 && Math.random() < 0.5) {
        meteors.push({
          x: Math.random() * width,
          y: -50,
          length: 150 + Math.random() * 100,
          speed: 8 + Math.random() * 2,
          angle: Math.PI / 4,
          alpha: 1,
        });
        lastMeteorTime = time;
      }

      // ציור מטאורים
      meteors.forEach((meteor, index) => {
        const dx = Math.cos(meteor.angle) * meteor.speed;
        const dy = Math.sin(meteor.angle) * meteor.speed;

        meteor.x += dx;
        meteor.y += dy;
        meteor.alpha -= 0.01;

        const gradient = ctx.createLinearGradient(
          meteor.x,
          meteor.y,
          meteor.x - dx * meteor.length,
          meteor.y - dy * meteor.length
        );
        gradient.addColorStop(0, `rgba(255, 165, 0, ${meteor.alpha})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(meteor.x, meteor.y);
        ctx.lineTo(
          meteor.x - dx * meteor.length,
          meteor.y - dy * meteor.length
        );
        ctx.stroke();

        if (meteor.alpha <= 0) {
          meteors.splice(index, 1);
        }
      });

      requestAnimationFrame(draw);
    };

    draw(0);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return canvasRef;
};
