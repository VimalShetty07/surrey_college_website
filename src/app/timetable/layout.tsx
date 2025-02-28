import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Timetable - University of Surrey',
  description: 'View your class schedule and academic timetable',
};

export default function TimetableLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 