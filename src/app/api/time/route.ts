import {NextResponse} from 'next/server'

export async function GET() {
  const time = new Date().toLocaleTimeString('en-GB', {
    timeStyle: 'long',
  })
  const response = NextResponse.json({time})

  response.headers.set('Access-Control-Allow-Origin', '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type')
  return response
}
