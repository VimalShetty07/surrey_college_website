import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Emergency Trusted Contact - University of Surrey',
  description: 'Manage your emergency contact information',
};

export default function EmergencyContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 