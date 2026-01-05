import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const defaultRedirect = '/applications';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL(defaultRedirect, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
