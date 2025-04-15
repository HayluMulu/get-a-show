import { useEffect, useRef, useState } from "react";
import "./mouse-follower.css";

export const MouseFollower = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const followerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrame: number;

    const follow = () => {
      if (followerRef.current) {
        const current = followerRef.current.getBoundingClientRect();
        const x = current.left + current.width / 2;
        const y = current.top + current.height / 2;

        const dx = (mousePos.x - x) * 0.3; 
        const dy = (mousePos.y - y) * 0.3;

        followerRef.current.style.transform = `translate(${x + dx}px, ${
          y + dy
        }px) translate(-50%, -50%)`;
      }

      animationFrame = requestAnimationFrame(follow);
    };

    animationFrame = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animationFrame);
  }, [mousePos]);

  return (
    <div className="logo-follower" ref={followerRef}>
      👽
    </div>
  );
};
