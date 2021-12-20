import Link from "next/link";
import Image from "next/image";
import moment from "moment";

export default function PostCard({ post }) {
  const { title, slug, datePublished, thumbnail } = post.fields;
  return (
    <div className=" shadow-xl  rounded-3xl py-20  ">
      <div>
        <Image
          src={"https:" + thumbnail.fields.file.url}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />
      </div>
      <div className=" py-4 flex flex-col justify-between ">
        <div className="flex flex-col">
          <h4 className=" mt-4 text-2xl font-bold text-center">{title}</h4>
          <p className=" mt-8 flex justify-center text-gray-500">edfwd</p>
        </div>
        <div className="  flex justify-around items-center">
          <div className="">
            <h3 className="text-gray-500 mt-2">
              Published: {moment(datePublished).format("MMMM Do YYYY")}
            </h3>
          </div>
          <div className="flex p-3 rounded-xl bg-blue-200 ">
            <Link href={"./blog-posts/" + slug}>
              <a>Read More</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
