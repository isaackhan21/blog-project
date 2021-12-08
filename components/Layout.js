import Link from "next/link";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="container flex flex-col justify-center mx-auto">
      <header className="flex flex-col items-center mt-14 ">
        <Link href="/">
          <a>
            <div className="">
              <h1 className="text-7xl font-bold">Web Dev Fanatic</h1>
            </div>
            <h3 className="text-4xl ml-2 mt-4 text-center  text-blue-500">
              My Personal Web Dev Blog
            </h3>
          </a>
        </Link>
        <NavBar />
      </header>

      <div className=" py-28 flex justify-center">{children}</div>
      <Footer />
    </div>
  );
}
