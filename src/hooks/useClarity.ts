// src/hooks/useClarity.ts
'use client';

import { useEffect } from 'react';
import { injectClarity } from '../helpers/clarity';
import config from '../config';

export function useClarity(): void {
  useEffect(() => {
    if (!config.enableClarity || !config.clarityId) return;

    injectClarity(config.clarityId);

    // ❌ DO NOT remove on unmount in production
  }, []);
}
