# 8ª Lista de exercícios de ADS

## **Universidade Estadual do Ceará - UECE**

### **Bacharelado em Ciência da Computação**

### **Disciplina de Avaliação de Desempenho de Sistemas - ADS**

### **Aluno:** Éricson Rogério Moreira

### **Matrícula:** 1538663

[Resultados da Simulação](https://www.notion.so/fbc21dea686344c7988a5e2264b2f86c)

## Código

Todo código fonte pode ser encontrado em: [https://github.com/ericsonmoreira/trabalho-8-ads.git](https://github.com/ericsonmoreira/trabalho-8-ads.git)

### **types.ts**

```tsx
export interface Point {
  x: number;
  y: number;
}
```

### **index.ts**

```tsx
import simulation from './simulation';

const valuesSimumaltions = [50, 100, 1000, 100000];

valuesSimumaltions.forEach((total) => simulation(total));
```

### **randons.ts**

```tsx
import { Point } from './types';
import seedrandom from 'seedrandom';

const random = seedrandom('ADS');

export const getRandomPoint = (): Point => {
  return { x: random() * 2 - 1, y: random() * 2 - 1 };
};
```

### **simulation.ts**

```tsx
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
```
