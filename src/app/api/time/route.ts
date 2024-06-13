import {NextResponse} from 'next/server'

export async function GET() {
  const time = new Date().toLocaleTimeString('en-GB', {
    timeStyle: 'long',
  })
  return NextResponse.json({time})
}
