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
    // <div className="  max-w-6xl  py-14 flex flex-col items-center">
    //   <div className="">
    //     <div className="flex flex-col items-center">
    //       <Image
    //         src={"https:" + featuredImage.fields.file.url}
    //         width={650}
    //         height={500}
    //       />
    //       <div className=" text-4xl font-bold pt-24">
    //         <h1>{title}</h1>
    //       </div>
    //     </div>
    //     <div className="pt-20 text-xl">
    //       <p>Published: {moment(datePublished).format("MMMM Do YYYY")}</p>
    //     </div>
    //     <div className="text-xl">{documentToReactComponents(content)}</div>
    //   </div>
    // </div>
    <article className="bg-red-200 px-32">
      <div class="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class=" bg-blue-200 mx-auto space-y-8 max-w-prose">
          <h1 class="text-3xl  font-bold leading-tight text-gray-900 sm:text-5xl">
            {title}
          </h1>
          <div class="aspect-w-16 aspect-h-9">
            <img
              class="object-cover rounded-xl"
              src="https://www.hyperui.dev/photos/man-2.jpeg"
              alt=""
            />
          </div>

          <div class="inline-block pb-8 border-b-2 border-blue-500">
            <p class="font-medium text-gray-600">By Alex Trimoboli</p>
          </div>

          <div class="prose prose-lg max-w-none">
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
