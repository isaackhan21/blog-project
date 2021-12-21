import Toggle from "./Toggle";

export default function NavBar() {
  return (
    <nav className="flex items-center  ">
      <ul className=" flex mx-auto mt-2 px-20 text-gray-700 dark:text-white   text-lg">
        <li className="mx-8">
          <a className="" href="/">
            Blog
          </a>
        </li>
        <li className="mx-8">
          <a className="" href="/about">
            About
          </a>
        </li>
        <li className="mx-8">
          <a className="" href="/contact">
            Contact
          </a>
        </li>
        <li className="mx-8">
          <a className="" href="/portfolio">
            Portfolio
          </a>
        </li>
      </ul>
      <Toggle />
    </nav>
  );
}
