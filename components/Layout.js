import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="container flex justify-center mx-auto">
      <header>
        <Link href="/">
          <a>
            <div className="ml-12 mt-8">
              <h1 className="text-7xl  font-bold">Web Dev Fanatic</h1>
              <h2 className="text-4xl mt-4 font-semibold">
                My Personal Web Dev Blog
              </h2>
            </div>
          </a>
        </Link>
      </header>

      <div className="">{children}</div>
      <footer>
        <p>Copyright 2021 Web Dev Fanatic</p>
      </footer>
    </div>
  );
}
