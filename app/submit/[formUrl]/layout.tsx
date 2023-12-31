import Logo from '@/components/Logo';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import Image from 'next/image';
import { ReactNode } from 'react';

function SubmitLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-screen min-w-full bg-background">
      <nav className="flex items-center justify-between border-b border-border px-4 py-2">
        <Logo />

        <ThemeSwitcher />
      </nav>
      <main className="flex w-full flex-grow">{children}</main>
    </div>
  );
}

export default SubmitLayout;
