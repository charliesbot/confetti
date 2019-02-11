/**
 * @Function Confetti
 */

import React, { useRef, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./styles.css";

type Transform = {
  tx: number;
  ty: number;
  rotation: number;
};

const papers = Array(250).fill(0);

const createTransform = ({ tx, ty, rotation }: Transform) =>
  `translate3d(${tx}vw, ${ty}vh, 1px) rotate(${rotation}deg)`;

const getKeyframes = () => {
  const fromTY = -Math.random() * 20;
  const fromTX = Math.random() * 100;
  const toTX = fromTX + Math.random() * 15;
  const rotation = Math.random() * 360;

  const keyframes = [
    {
      transform: createTransform({ tx: fromTX, ty: fromTY, rotation })
    },
    {
      transform: createTransform({ tx: toTX, ty: 100, rotation })
    }
  ];

  return keyframes;
};

const colors = ["yellow", "blue", "red", "orange", "purple"];

const Paper = () => {
  const ref = useRef<HTMLDivElement>(null);
  const width = Math.random() * 8;
  const height = width * 0.4;
  const colourIdx = Math.ceil(Math.random() * colors.length) - 1;
  const color = colors[colourIdx];

  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }

    ref.current.animate(getKeyframes(), {
      iterations: Infinity,
      duration: Math.random() * 3000 + 3000
    });
  }, [ref.current]);

  return (
    <div
      className="block"
      ref={ref}
      style={{
        position: "absolute",
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: color,
        opacity: Math.random() + 0.5
      }}
    />
  );
};

const Confetti = () => {
  return createPortal(
    <section className={styles.wrapper}>
      {papers.map((_, index) => (
        <Paper key={index} />
      ))}
    </section>,
    document.body
  );
};

export default Confetti;
