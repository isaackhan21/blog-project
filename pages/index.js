import Head from "next/head";
import { createClient } from "contentful";
import PostCard from "../components/PostCard";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "blogPost" });

  return {
    props: {
      blogPosts: res.items,
      revalidate: 1,
    },
  };
}

export default function Home({ blogPosts }) {
  console.log(blogPosts);
  return (
    <div className="py-28">
      <div className="  flex justify-center  xl:justify-start xl:ml-24 2xl:ml-8">
        <h1 className=" dark:text-white text-2xl sm:text-3xl lg:text-3xl font-bold">
          All Posts
        </h1>
      </div>
      <div className=" mt-12 lg:grid lg:grid-cols-2 lg:justify-items-center   md:gap-2 2xl:grid-cols-3 2xl:gap-20  flex flex-col items-center ">
        {blogPosts.map((post) => (
          <PostCard key={post.sys.id} post={post} />
        ))}
      </div>
    </div>
  );
}
