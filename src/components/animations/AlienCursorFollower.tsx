import React from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';
import { useDeviceDetection } from '../../hooks/useDeviceDetection';

export const AlienCursorFollower: React.FC = () => {
  const { isDesktop } = useDeviceDetection();
  const { followerPos, isVisible } = useMousePosition(isDesktop);

  // Don't render on mobile/tablet
  if (!isDesktop || !isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        left: followerPos.x,
        top: followerPos.y,
        transform: 'translate(-50%, -50%)',
        fontSize: '1.5rem',
        pointerEvents: 'none',
        zIndex: 99999,
        width: '2rem',
        height: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.1s ease-out'
      }}
    >
      👽
    </div>
  );
};
