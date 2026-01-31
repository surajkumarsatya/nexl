// src/types/global.d.ts

export {};

type ClarityFunction = {
  (...args: unknown[]): void;
  q?: unknown[][];
};

declare global {
  interface Window {
    clarity?: ClarityFunction;
  }
}
