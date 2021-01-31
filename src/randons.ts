import { Point } from './types';
import seedrandom from 'seedrandom';

const random = seedrandom('seed para testar');

export const getRandomPoint = (): Point => {
  return { x: random() * 2 - 1, y: random() * 2 - 1 };
};
