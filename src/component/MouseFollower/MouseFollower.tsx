import { useEffect, useRef, useState } from "react";
import "./mouse-follower.css";

export const MouseFollower = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const followerRef = useRef<HTMLDivElement | null>(null);
  const isDesktop = useRef<boolean>(false);
  const lastMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    isDesktop.current = !('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    if (!isDesktop.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const pos = { x: e.clientX, y: e.clientY };
      lastMousePos.current = pos;
      setMousePos(pos);
      if (!isVisible) {
        if (followerRef.current) {
          followerRef.current.style.transition = "none";
          followerRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`;
          void followerRef.current.offsetWidth;
          followerRef.current.style.transition = "";
        }
        setIsVisible(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      if (!e.relatedTarget && !e.toElement) {
        setIsVisible(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isDesktop.current) return;
    if (!isVisible) return;

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
  }, [mousePos, isVisible]);

  return (
    <div
      ref={followerRef}
      className={`logo-follower ${isVisible ? "visible" : "hidden"}`}
    >
      👽
    </div>
  );
};
