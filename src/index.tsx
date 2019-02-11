import React, { useRef, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./styles.css";
import { getKeyframes } from "./utils";
import { Props } from "./types";

const papers = Array(250).fill(0);
const defaultColors = ["yellow", "blue", "red", "orange", "purple"];

const Paper = (props: Props) => {
  const { colors } = props;
  const ref = useRef<HTMLDivElement>(null);
  const width = Math.random() * 8;
  const height = width * 0.4;
  const colorIdx = Math.ceil(Math.random() * colors.length) - 1;
  const color = colors[colorIdx];

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

const Confetti = (props: Props) => {
  const { colors = defaultColors } = props;
  return createPortal(
    <section className={styles.wrapper}>
      {papers.map((_, index) => (
        <Paper key={index} colors={colors} />
      ))}
    </section>,
    document.body
  );
};

export default Confetti;
