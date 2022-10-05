import { NextRequest, NextResponse } from "next/server"

export const middleware = async (req: NextRequest) => {

  // Guest URL
  const guest = ['/login', '/registrasi']

  // Global URL
  const global = ['/beranda', '/car', '/test', '/']

  // Don't need middleware 
  for (let url of global) {
    if (req.nextUrl.pathname.startsWith(url)) {
      return NextResponse.next()
    }
  }

  // Middleware Guest
  if (req.cookies.get('token')) {

    for (let url of guest) {
      if (req.nextUrl.pathname.startsWith(url)) {
        return NextResponse.redirect(new URL('/beranda', req.url))
      }
    }

    return NextResponse.next()

  }

  // When token is undefined
  if (guest) return NextResponse.next()

  // Need token
  return NextResponse.redirect(new URL('/login', req.url))

}

// export function middleware() {
//   return NextResponse.next()
// }

export const config = {
  matcher: [
    '/:path*'
  ]
}

// Middleware Guest -> ['/', 'login', 'registrasi']
