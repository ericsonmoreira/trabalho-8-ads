import { getRandomPoint } from './randons';
import { Point } from './types';

const insideCircle = (point: Point) =>
  Math.pow(point.x, 2) + Math.pow(point.y, 2) <= 1;

const countInsideCircle = (points: Point[]) =>
  points.reduce((acc, curr) => (insideCircle(curr) ? acc + 1 : acc), 0);

const simulation = (total: number) => {
  const points: Point[] = [];

  for (let i = 0; i < total; i++) points.push(getRandomPoint());

  // número PI gerado com aproximação de 6 casas decimais
  const pi = Number(((countInsideCircle(points) / total) * 4).toFixed(6));

  const erro = Math.abs(pi - Math.PI);

  console.table({pi, erro, total});
};

export default simulation;
