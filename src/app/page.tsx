import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Subdomain and Path-Based Routing Test</h1>
      <p>
        Try visiting a path-based route:{" "}
        <Link href="/profile/testuser">/profile/testuser</Link>
      </p>
      <p>Or try visiting a subdomain like: <strong>testuser.localhost:3000</strong></p>
    </div>
  );
}
