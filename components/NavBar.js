import Link from "next/link";
import Toggle from "./Toggle";

export default function NavBar() {
  return (
    <nav className="flex items-center   ">
      <ul className=" flex items-center   mx-auto mt-4 md:mt-2 md:px-20  text-gray-700 dark:text-white text-sm sm:text-  md:text-lg">
        <li className=" mx-4 md:mx-8">
          <Link href="/">
            <a className="">Blog</a>
          </Link>
        </li>
        <li className=" mx-4 md:mx-8">
          <Link href="/blog-posts/about">
            <a className="" href="">
              About
            </a>
          </Link>
        </li>

        <li className=" mx-4 md:mx-8">
          <Link href="/blog-posts/contact">
            <a className="" href="">
              Contact
            </a>
          </Link>
        </li>

        <li className=" mx-2 md:mx-8 ">
          <Toggle />
        </li>
      </ul>
    </nav>
  );
}
