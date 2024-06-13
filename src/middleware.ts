import {NextResponse} from 'next/server'

export function middleware() {
  console.log('running in the middleware')
  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/middleware', '/api/middleware'],
}
