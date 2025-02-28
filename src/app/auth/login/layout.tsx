import '@/app/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login - Surrey Self-Service',
  description: 'Sign in to access your Surrey University account.',
};

export default function LoginLayout({
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