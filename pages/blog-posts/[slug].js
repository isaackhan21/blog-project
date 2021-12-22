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

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { blogPost: items[0] },
    revalidate: 1,
  };
}

export default function PostDetails({ blogPost }) {
  if (!blogPost) return <div>Loading...</div>;
  const { featuredImage, title, datePublished, content } = blogPost.fields;
  return (
    <article className="">
      <div class="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="  mx-auto space-y-8 max-w-screen-md">
          <h1 class="text-3xl pb-8  font-bold leading-tight text-gray-900 sm:text-5xl dark:text-white">
            {title}
          </h1>
          <div class="aspect-w-16 aspect-h-9">
            <Image
              src={"https:" + featuredImage.fields.file.url}
              width={650}
              height={500}
              className="object-cover rounded-xl"
            />
          </div>

          <div class="inline-block pb-8 border-b-2 border-gray-200">
            <h3 className="text-gray-500 dark:text-white mt-2">
              Published: {moment(datePublished).format("MMMM Do YYYY")}
            </h3>
          </div>

          <div class=" dark:text-white prose prose-lg max-w-none">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
              laboriosam quia veritatis ullam, excepturi deserunt ex vero nemo
              ipsam, est incidunt porro labore! Harum cupiditate suscipit
              tempora! Aut est quod pariatur alias ab maiores iusto repellendus.
              Maiores nihil totam delectus. Cumque eaque tempore dolor dolorem
              natus velit officiis nisi. Doloremque.
            </p>

            <h2>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              rerum?
            </h2>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
              dignissimos quidem autem vitae! Distinctio voluptas veritatis
              voluptatibus laborum suscipit beatae, sint atque tenetur
              obcaecati, expedita ipsa sit veniam eos qui?
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
