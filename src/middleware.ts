import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the user is authenticated by looking for a token in cookies
  const isAuthenticated = request.cookies.has('isAuthenticated');
  
  // If the request is for the login page, allow it to proceed
  if (request.nextUrl.pathname.startsWith('/auth/login')) {
    return NextResponse.next();
  }
  
  // If the user is not authenticated and trying to access a protected route, redirect to login
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }
  
  // Allow authenticated requests to proceed
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