import Link from "next/link";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="container flex flex-col justify-center mx-auto">
      <div className="dark:bg-gray-900">
        <header className="flex py-4   justify-items-start justify-between items-center border-b  ">
          <Link href="/">
            <a>
              <div className="">
                <h1 className="ml-6 text-4xl dark:text-white font-bold">
                  Web Dev Fanatic
                </h1>
              </div>
            </a>
          </Link>
          <NavBar />
        </header>

        <div className=" py-28 flex justify-center">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
