import { Point } from './types';
import seedrandom from 'seedrandom';

const random = seedrandom('ADS');

export const getRandomPoint = (): Point => {
  return { x: random() * 2 - 1, y: random() * 2 - 1 };
};
