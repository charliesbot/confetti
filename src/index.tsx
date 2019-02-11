import React, { useRef, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./styles.css";
import { getKeyframes } from "./utils";
import { PaperProps, Props } from "./types";

const defaultNumberOfElements = 250;
const defaultColors = [
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#03a9f4",
  "#00bcd4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
  "#795548"
];

const Paper = (props: PaperProps) => {
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
      duration: Math.random() * 3000 + 1500
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
  const {
    colors = defaultColors,
    numberOfElements = defaultNumberOfElements
  } = props;

  const papers = Array(numberOfElements).fill(0);
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
