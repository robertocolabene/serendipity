import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'asdasd',
    description: 'qweqweqwe'
  };
}

export default function About() {

  return (
    <main>
        <p>About</p>
        <Link href="/">Home</Link>
    </main>
  )
}
