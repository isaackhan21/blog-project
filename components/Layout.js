import Link from "next/link";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="container  flex flex-col mx-auto  ">
      <div className="dark:bg-gray-900 ">
        <header className=" flex flex-col md:flex-row py-3  justify-between items-center border-b ">
          <Link href="/">
            <div className="flex justify-center cursor-pointer mt-2 md:mt-0">
              <a>
                <div className=" ">
                  <h1 className="text-3xl md:text-3xl lg:ml-6   dark:text-white font-bold">
                    Web Dev Blog
                  </h1>
                </div>
              </a>
            </div>
          </Link>
          <div className=" flex justify-center">
            <NavBar />
          </div>
        </header>

        <div className="  flex justify-center">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
