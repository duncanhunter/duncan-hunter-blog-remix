import { Link } from "@remix-run/react";
import { formatDate } from "~/utils";

export default function PostPreview({ post }: any) {
  const imageUrl =
    process.env.NODE_ENV === "development"
      ? `http://localhost:3000/${post.imagePath}`
      : `http://duncanhunter.com.au/${post.imagePath}`;

  return (
    <Link
      className="rounded-md block m-4 text-xl font-semibold bg-gray-800 hover:cursor-pointer hover:shadow-md hover:bg-gray-700"
      to={`blog/${post.slug}`}
    >
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden mb-10">
        {post.imagePath ? (
          <div className="flex-shrink-0">
            <img
              className="h-48 w-full object-cover"
              src={imageUrl}
              alt="post.imageAlt"
            ></img>
          </div>
        ) : null}
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div className="flex-1">
            {post.title}
            <p className="text-sm font-thin pb-2">{formatDate(post.date)}</p>
            <p className="text-md font-thin">{post.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
