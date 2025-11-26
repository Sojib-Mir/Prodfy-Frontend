// import { NextResponse } from "next/server";
// // import admin from '@/lib/firebaseAdmin';

// export const runtime = "edge";

// // This function can be marked async if using await inside
// export async function proxy(request) {
//   // const user = false
//   // console.log('this is user', user)

//   // if (!user) {

//   //     return NextResponse.redirect(new URL('/', request.url))
//   // }

//   //   const token = request.cookies.get("fbToken")?.value;
//   const user = false;

//   if (!user) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }
// }

// // Alternatively, you can use a default export:
// // export default function proxy(request) { ... }

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: ["/add-product/:path", "/manage-products/:path"],
// };

import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function proxy(request) {
  const token = request.cookies.get("fbToken")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    "/add-product",
    "/manage-products",
    "/add-product/:path*",
    "/manage-products/:path*",
  ],
};
