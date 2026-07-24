import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.has('isAuthenticated');
  const isLoginPage = request.nextUrl.pathname.startsWith('/auth/login');

  // Logged-in users hitting login go home
  if (isLoginPage && isAuthenticated) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (isLoginPage) {
    return NextResponse.next();
  }

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  return NextResponse.next();
}

// Apply this middleware to all routes except static files
export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (robots.txt, etc)
     */
    '/((?!_next/static|_next/image|favicon.ico|images/).*)',
  ],
}; 