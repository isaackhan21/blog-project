import { createClient } from "contentful";
import Image from "next/image";
import moment from "moment";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "blogPost",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": params.slug,
  });

  return {
    props: { blogPost: items[0] },
    revalidate: 1,
  };
}

export default function PostDetails({ blogPost }) {
  if (!blogPost) return <div>Loading...</div>;
  const { featuredImage, title, datePublished, content } = blogPost.fields;
  return (
    <div>
      <div>
        <Image
          src={"https:" + featuredImage.fields.file.url}
          width={featuredImage.fields.file.details.image.width}
          height={featuredImage.fields.file.details.image.height}
        />
        <h2>{title}</h2>
        <div>
          <p>Published: {moment(datePublished).format("MMMM Do YYYY")}</p>
        </div>
        <div>{documentToReactComponents(content)}</div>
      </div>
    </div>
  );
}
