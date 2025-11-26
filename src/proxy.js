import { NextResponse } from "next/server";

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
