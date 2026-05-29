import type { ReactNode } from 'react';

type ShellProps = {
  children: ReactNode;
};

export function Shell({ children }: ShellProps) {
  return <div className="relative min-h-screen overflow-hidden bg-ink-950 text-ink-50">{children}</div>;
}
