export default function NavBar() {
  return (
    <nav className="mt-8 pt-2 border-t-2 ">
      <ul className=" flex mx-auto mt-2 px-20 text-gray-500  text-xl">
        <li className="mx-8">
          <a href="/">Home</a>
        </li>
        <li className="mx-8">
          <a href="/about">About</a>
        </li>
        <li className="mx-8">
          <a href="/contact">Contact</a>
        </li>
        <li className="mx-8">
          <a href="/contact">Portfolio</a>
        </li>
      </ul>
    </nav>
  );
}
