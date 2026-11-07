import Link from "next/link";

export default function NotFound() {
  return <main className="grid min-h-screen place-items-center px-5 text-center"><div><p className="text-lime">404</p><h1 className="mt-3 font-display text-5xl">Page not found</h1><Link href="/" className="mt-8 inline-block text-lime hover:underline">Return home →</Link></div></main>;
}
