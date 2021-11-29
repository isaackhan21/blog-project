import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <Link href="/">
          <a>
            <h1>Web Dev Fanatic</h1>
            <h3>Me Personal Web Dev Blog</h3>
          </a>
        </Link>
      </header>

      <div className="">{children}</div>
      <footer>
        <p>Copyright 2021 Web Dev Fantic</p>
      </footer>
    </div>
  );
}
