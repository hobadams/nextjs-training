import {NextResponse} from 'next/server'
import {unstable_noStore as noStore} from 'next/cache'

export async function GET() {
  noStore()
  return NextResponse.json({
    privateThing: process.env.PRIVATE_VAR,
    publicThing: process.env.NEXT_PUBLIC_TEST_VAR,
  })
}
