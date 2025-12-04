// // middleware.ts
// import { NextResponse } from 'next/server'

// export function middleware(req) {
//   const isAuthenticated = false;// Your authentication logic here

//   if (!isAuthenticated) {
//     return NextResponse.redirect(new URL('/login', req.url))
//   }

//   return NextResponse.next()
// }

// export const config = {
//   matcher: '/admin/*', // Define the path to protect


// }
