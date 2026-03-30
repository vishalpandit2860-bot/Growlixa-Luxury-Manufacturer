import { useState, useRef, useEffect, type ReactNode, type MouseEvent } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltDegree?: number;
}

const TiltCard = ({ children, className = "", tiltDegree = 8 }: TiltCardProps) => {
  const [transform, setTransform] = useState("");
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(
      `perspective(800px) rotateY(${x * tiltDegree}deg) rotateX(${-y * tiltDegree}deg) scale3d(1.02,1.02,1.02)`
    );
  };

  const handleMouseLeave = () => {
    if (isTouchDevice) return;
    setTransform("perspective(800px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)");
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isTouchDevice ? undefined : transform,
        transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default TiltCard;
