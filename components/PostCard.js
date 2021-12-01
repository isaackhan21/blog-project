import Link from "next/link";

export default function PostCard({ post }) {
  const { title, slug, datePublished, thumbnail } = post.fields;
  return (
    <div>
      <div>{}</div>
      <div>
        <div>
          <h4>{title}</h4>
          <p>edfwd</p>
        </div>
        <div>
          <Link href={"./blog-posts" + slug}>
            <a>Read More</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
