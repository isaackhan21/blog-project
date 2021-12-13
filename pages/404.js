import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  }, []);
  return (
    <div className=" bg-blue-200 py-42 flex flex-col items-evenly">
      <h1 className="text-8xl font-bold">404</h1>
      <h2 className="text-4xl">Ooops!</h2>
      <h2 className="text-3xl">Nothing to see here :(</h2>
      <p className="text-2xl">
        Redirecting to the <Link href="/">Homepage</Link>
      </p>
    </div>
  );
}
