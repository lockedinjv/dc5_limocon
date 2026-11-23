import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1>I am John Viel Limocon</h1>

      <p>
        usa ka IT student nga interested
        in learning programming and web development.
        I enjoy creating simple websites and projects.
      </p>

      <Link
        href="/projects"
        className="mt-4 inline-block underline"
      >
        See my projects
      </Link>
    </main>
  );
}
