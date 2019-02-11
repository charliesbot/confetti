import { Transform } from "./types";

const createTransform = ({ tx, ty, rotation }: Transform) =>
  `translate3d(${tx}vw, ${ty}vh, 1px) rotate(${rotation}deg)`;

export const getKeyframes = () => {
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
