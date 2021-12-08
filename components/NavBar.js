export default function NavBar() {
  return (
    <nav className="mt-8 pt-2 border-t-2 border-gray-200 ">
      <ul className=" flex mx-auto mt-2 px-20 text-gray-500   text-xl">
        <li className="mx-8">
          <a className="hover:text-gray-700" href="/">
            Home
          </a>
        </li>
        <li className="mx-8">
          <a className="hover:text-gray-700" href="/about">
            About
          </a>
        </li>
        <li className="mx-8">
          <a className="hover:text-gray-700" href="/contact">
            Contact
          </a>
        </li>
        <li className="mx-8">
          <a className="hover:text-gray-700" href="/contact">
            Portfolio
          </a>
        </li>
      </ul>
    </nav>
  );
}
