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
    },
  };
}

export default function Home({ blogPosts }) {
  console.log(blogPosts);
  return (
    <div className="">
      <div className="ml-4">
        <h1 className="text-5xl font-bold">Latest Posts</h1>
      </div>
      <div className="mt-12 grid grid-cols-3 gap-20">
        {blogPosts.map((post) => (
          <PostCard key={post.sys.id} post={post} />
        ))}
      </div>
    </div>
  );
}
