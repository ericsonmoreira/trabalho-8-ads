import { Point } from './types';

export const getRandomPoint = (): Point => {
  return { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 };
};
