import '@/app/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Modules - Surrey Self-Service',
  description: 'View and select your modules at Surrey University.',
};

export default function ModulesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {children}
    </div>
  );
} 