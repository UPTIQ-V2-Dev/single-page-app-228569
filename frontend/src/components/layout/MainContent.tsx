import { ReactNode } from 'react';

interface MainContentProps {
  children: ReactNode;
}

export const MainContent = ({ children }: MainContentProps) => {
  return (
    <main className="min-h-screen pt-16">
      {children}
    </main>
  );
};