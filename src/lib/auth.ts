import Cookies from 'js-cookie';

export const AUTH_COOKIE = 'isAuthenticated';

export const DEMO_CREDENTIALS = {
  email: 'mm04177@surrey.ac.uk',
  password: 'AZaz09.,()',
} as const;

export function login(): void {
  Cookies.set(AUTH_COOKIE, 'true', { expires: 30 });
  if (typeof window !== 'undefined') {
    localStorage.setItem(AUTH_COOKIE, 'true');
  }
}

export function logout(): void {
  Cookies.remove(AUTH_COOKIE);
  if (typeof window !== 'undefined') {
    localStorage.removeItem(AUTH_COOKIE);
  }
}

export function validateCredentials(email: string, password: string): boolean {
  return (
    email === DEMO_CREDENTIALS.email && password === DEMO_CREDENTIALS.password
  );
}
