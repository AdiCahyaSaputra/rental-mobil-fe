import { NextRequest, NextResponse } from "next/server"

export const middleware = async (req: NextRequest) => {

  const guest = req.nextUrl.pathname.startsWith('/login') || req.nextUrl.pathname.startsWith('/registrasi')

  if (req.nextUrl.pathname.startsWith('/test')) {
    return NextResponse.next()
  }

  // Middleware Guest
  if (req.cookies.get('token')) {

    if (guest) {
      return NextResponse.redirect(new URL('/', req.url))
    }

    return NextResponse.next()

  }

  // Middleware Auth (when token is undefined)
  if(guest) return NextResponse.next()

  return NextResponse.redirect(new URL('/login', req.url))

}


export const config = {
  matcher: ['/', '/login', '/registrasi', '/test']
}
