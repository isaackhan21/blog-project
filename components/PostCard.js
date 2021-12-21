import Link from "next/link";
import Image from "next/image";
import moment from "moment";

export default function PostCard({ post }) {
  const { title, slug, datePublished, thumbnail } = post.fields;
  return (
    // <div className=" shadow-lg border border-gray-100 flex flex-col justify-between  rounded-3xl pt-12 ">
    //   <div>
    //     <Image
    //       src={"https:" + thumbnail.fields.file.url}
    //       width={450}
    //       height={300}
    //       className="rounded-2xl"
    //     />
    //   </div>
    //   <div className=" py-4 flex flex-col justify-between ">
    //     <div className="flex flex-col">
    //       <h4 className=" mt-4 text-2xl font-bold text-center">{title}</h4>
    //       <p className="  py-10  mt-8 flex justify-center text-gray-500">
    //         edfwd
    //       </p>
    //     </div>
    //     <div className="  py-4 flex justify-around items-center">
    //       <div className=" py-4 flex items-center">
    //         <h3 className="text-gray-500 mt-2">
    //           Published: {moment(datePublished).format("MMMM Do YYYY")}
    //         </h3>
    //       </div>
    //       <div className="flex px-5 py-3 rounded-xl bg-gradient-to-r from-blue-400 to-emerald-400">
    //         <Link href={"./blog-posts/" + slug}>
    //           <a>Read More</a>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <a class="block overflow-hidden shadow-xl rounded-3xl" href="">
      <Image
        src={"https:" + thumbnail.fields.file.url}
        width={450}
        height={300}
        className="rounded-2xl"
      />

      <div class="relative w-full p-6 -mt-8 bg-white rounded-3xl">
        <h5 class="text-xl font-bold text-gray-900">{title}</h5>

        <p class="hidden mt-2 text-gray-500 sm:block">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
          commodi eligendi officiis laboriosam autem eveniet.
        </p>

        <dl class="items-center mt-6 sm:flex">
          <div class="flex items-center">
            <span class="flex ml-3 space-x-1 space-x-reverse text-sm font-medium text-gray-600 ">
              <h3 className="text-gray-500 mt-2">
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
