import '../globals.css';

export const metadata = {
  title: 'Surrey Self-Service',
  description: 'Access your student information and self-service options at Surrey University',
};

export default function AcademicsLayout({
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