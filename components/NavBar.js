export default function NavBar() {
  return (
    <nav className="flex items-center  ">
      <ul className=" flex mx-auto mt-2 px-20 text-gray-500   text-xl">
        <li className="mx-8">
          <a className="hover:text-gray-700" href="/">
            Home
          </a>
        </li>
        <li className="mx-8">
          <a className="hover:text-gray-700" href="/about">
            Blog
          </a>
        </li>
        <li className="mx-8">
          <a className="hover:text-gray-700" href="/contact">
            Dashboard
          </a>
        </li>
        <li className="mx-8">
          <a className="hover:text-gray-700" href="/contact">
            Portfolio
          </a>
        </li>
        <li className="mx-8">
          <a className="hover:text-gray-700" href="/contact">
            Snippets
          </a>
        </li>
      </ul>
    </nav>
  );
}
