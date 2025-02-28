import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'University of Surrey - Student Portal',
  description: 'University of Surrey student portal for accessing academic resources, timetables, and registration',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
