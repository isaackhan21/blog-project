import Link from "next/link";
import Image from "next/image";
import moment from "moment";

export default function PostCard({ post }) {
  const { title, slug, datePublished, thumbnail } = post.fields;
  return (
    <a class="  block overflow-hidden shadow-xl rounded-3xl" href="">
      <Image
        src={"https:" + thumbnail.fields.file.url}
        width={550}
        height={400}
        className="rounded-2xl"
      />

      <div class="  relative w-full p-6 -mt-8 bg-white dark:bg-gray-800 rounded-3xl">
        <h5 class="text-xl font-bold text-gray-900 dark:text-white">{title}</h5>

        <p class="hidden mt-2 text-gray-500 dark:text-white sm:block">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
          commodi eligendi officiis laboriosam autem eveniet.
        </p>

        <dl class="items-center mt-6 sm:flex">
          <div class="flex items-center">
            <span class="flex ml-3 space-x-1 space-x-reverse text-sm font-medium text-gray-600 ">
              <h3 className="text-gray-500 dark:text-white mt-2">
                Published: {moment(datePublished).format("MMMM Do YYYY")}
              </h3>
            </span>
          </div>

          <div class="flex items-center mt-3 sm:ml-6 sm:mt-0">
            <span class="flex ml-3 space-x-1 space-x-reverse text-sm font-medium text-gray-600 ">
              <div className="">
                <Link href={"./blog-posts/" + slug}>
                  <a
                    href=""
                    class="relative inline-flex items-center px-5 py-3 text-white bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-lg group"
                  >
                    <span class="absolute left-0 transition-transform transform -translate-x-full group-hover:translate-x-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="w-5 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>

                    <span class="font-medium transition-all group-hover:ml-6">
                      Read More
                    </span>
                  </a>
                </Link>
              </div>
            </span>
          </div>
        </dl>
      </div>
    </a>
  );
}
