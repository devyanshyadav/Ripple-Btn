'use client'
import React, { useState, useLayoutEffect, MouseEvent } from "react";
import styled from "styled-components";

const RippleContainer = styled.div<{ duration: number; color: string }>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  span {
    transform: scale(0);
    border-radius: 100%;
    position: absolute;
    opacity: 0.75;
    background-color: ${(props) => props.color};
    animation-name: ripple;
    animation-duration: ${(props) => props.duration}ms;
  }

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`;

interface Ripple {
  x: number;
  y: number;
  size: number;
}

// Adjust the ButtonProps interface to specify the type of 'variant'
interface ButtonProps {
  duration?: number;
  color?: string;
  className?: string;
  children?: React.ReactNode;
}

const useDebouncedRippleCleanUp = (
  rippleCount: number,
  duration: number,
  cleanUpFunction: () => void
) => {
  useLayoutEffect(() => {
    let bounce: NodeJS.Timeout | null = null;
    if (rippleCount > 0) {
      if (bounce) clearTimeout(bounce);

      bounce = setTimeout(() => {
        cleanUpFunction();
        if (bounce) clearTimeout(bounce);
      }, duration * 4);
    }

    return () => {
      if (bounce) clearTimeout(bounce);
    };
  }, [rippleCount, duration, cleanUpFunction]);
};
interface Props {
  style?: React.CSSProperties; // style is optional, denoted by ?
}
const RippleBtn: React.FC<ButtonProps & Props> = ({
  duration = 850,
  className="",
  color = "#fff",
  children,
  ...props
}) => {
  const [rippleArray, setRippleArray] = useState<Ripple[]>([]);

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([]);
  });

  const addRipple = (event: MouseEvent<HTMLButtonElement>) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;
    const x = event.pageX - rippleContainer.x - size / 2;
    const y = event.pageY - rippleContainer.y - size / 2;
    const newRipple: Ripple = {
      x,
      y,
      size,
    };

    setRippleArray([...rippleArray, newRipple]);
  };

  return (
    <button
      {...props}
      className={className}
      style={{ position: "relative", overflow: "hidden", userSelect: "none", ...props.style }}
      onMouseDown={addRipple}
    >
      <RippleContainer duration={duration} color={color}>
        {rippleArray.length > 0 &&
          rippleArray.map((ripple, index) => {
            return (
              <span
                key={"span" + index}
                style={{
                  top: ripple.y,
                  left: ripple.x,
                  width: ripple.size,
                  height: ripple.size,
                }}
              />
            );
          })}
      </RippleContainer>
      <span>{children}</span>
    </button>
  );
};

export default RippleBtn;
