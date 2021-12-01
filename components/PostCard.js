import Link from "next/link";
import Image from "next/image";

export default function PostCard({ post }) {
  const { title, slug, datePublished, thumbnail } = post.fields;
  return (
    <div>
      <div>
        <Image
          src={"https:" + thumbnail.fields.file.url}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />
      </div>
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
