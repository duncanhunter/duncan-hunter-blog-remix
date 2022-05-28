import { Link } from "@remix-run/react";
import { formatDate } from "~/utils";

export default function PostPreview({ post }: any) {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidd">
      {post.image ? (
        <div className="flex-shrink-0">
          <img
            className="h-48 w-full object-cover"
            src={post.image}
            alt="post.imageAlt"
          ></img>
        </div>
      ) : null}
      <div className="flex-1 bg-gray-800 p-6 flex flex-col justify-between">
        <div className="flex-1">
          <Link
            className="block m-4 text-xl font-semibold"
            to={`blog/${post.slug}`}
          >
            {post.title}
          </Link>
          <p className="text-sm font-thin pb-2">{formatDate(post.date)}</p>
          <p className="text-md font-thin">{post.description}</p>
        </div>
      </div>
    </div>
  );
}
