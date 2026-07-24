'use client';

import { useRouter } from 'next/navigation';
import { logout } from '@/lib/auth';

type LogoutButtonProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function LogoutButton({
  className = 'text-blue-600 hover:underline',
  children = 'Logout',
}: LogoutButtonProps) {
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/auth/login');
  };

  return (
    <button type="button" onClick={handleLogout} className={className}>
      {children}
    </button>
  );
}
