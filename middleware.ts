import { NextRequest, NextResponse } from "next/server"

export const middleware = async (req: NextRequest) => {

  const guest = req.nextUrl.pathname.startsWith('/login') || req.nextUrl.pathname.startsWith('/registrasi')

  if (req.nextUrl.pathname.startsWith('/test')) {
    return NextResponse.next()
  }

  // Middleware Guest
  if (req.cookies.get('token')) {

    if (guest || req.nextUrl.pathname === '/') {
      return NextResponse.redirect(new URL('/beranda', req.url))
    }

    return NextResponse.next()

  }

  // When token is undefined
  if (guest) return NextResponse.next()

}

// export function middleware() {
//   return NextResponse.next()
// }

export const config = {
  matcher: [
    '/', '/login',
    '/registrasi',
    '/test', '/beranda']
}

// Middleware Guest -> ['/', 'login', 'registrasi']
