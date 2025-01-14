import { NextResponse } from "next/server";

export function middleware(req: Request) {
  const host = req.headers.get("host") || ""; // e.g., "testuser.localhost:3000"
  const subdomain = host.split(".")[0]; // Extract "testuser"
  console.log("host", host);
  console.log("subdomain", subdomain);
  // Ignore localhost and main domain
  if (subdomain !== "localhost" && subdomain !== "www") {
    const url = new URL(req.url);
    url.pathname = `/profile/${subdomain}`; // Rewrite to the profile route
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
