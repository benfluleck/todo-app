
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
      <main className="p-8 bg-stone-300 min-h-screen">
        {children}
      </main>
  );
};


export default Layout;
