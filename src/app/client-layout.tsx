'use client';

import { useClarity } from '@/hooks/useClarity';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useClarity();
  return <>{children}</>;
}
