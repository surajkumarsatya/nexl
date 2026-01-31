// src/helpers/clarity.ts

declare global {
  interface Window {
    clarity?: ClarityFunction;
  }
}

type ClarityFunction = {
  (...args: unknown[]): void;
  q?: unknown[][];
};

export function injectClarity(projectId: string): void {
  if (typeof window === 'undefined') return;

  // Prevent double injection
  if (document.getElementById('clarity-script')) return;

  try {
    if (!window.clarity) {
      const clarityStub: ClarityFunction = (...args: unknown[]) => {
        (clarityStub.q = clarityStub.q ?? []).push(args);
      };

      window.clarity = clarityStub;
    }

    const script = document.createElement('script');
    script.id = 'clarity-script';
    script.async = true;
    script.src = `https://www.clarity.ms/tag/${projectId}`;

    document.head.appendChild(script);
  } catch (e) {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error('[Clarity] Script injection failed:', e);
    }
  }
}
