import { NextResponse } from "next/server";

export function middleware(req: Request) {
  const host = req.headers.get("host") || "";
  const subdomain = host.split(".")[0];

  if (subdomain !== "sj1" && subdomain !== "www") {
    const url = new URL(req.url);
    url.pathname = `/profile/${subdomain}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
