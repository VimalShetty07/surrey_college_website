import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Registration - University of Surrey',
  description: 'Manage your registration details and personal information',
};

export default function RegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 