import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  // Log environment variables to Vercel logs
  console.log('PRODUCT_DATA_URL:', process.env.PRODUCT_DATA_URL)
  console.log('NEXT_PUBLIC_BASE_URL:', process.env.NEXT_PUBLIC_BASE_URL)
  
  return NextResponse.next()
}
 
export const config = {
  matcher: '/',
} 