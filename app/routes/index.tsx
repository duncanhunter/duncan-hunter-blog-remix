import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Tags from "../components/Tags";
import PostPreview from "./blog/PostPreview";
import * as firstPost from "./blog/first-post.mdx";
import * as chasingTheHolyGrail from "./blog/chasing-the-holy-grail.mdx";

function postFromModule(mod: any) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta,
    ...mod.attributes,
  };
}

export const loader: LoaderFunction = ({ request }) => {
  const url = new URL(request.url);
  const queryParams = Object.fromEntries(url.searchParams.entries());
  const posts = [
    postFromModule(chasingTheHolyGrail),
    postFromModule(firstPost),
  ].filter((article) => {
    return !queryParams?.tag
      ? true
      : queryParams?.tag === "all"
      ? true
      : article?.tags
      ? article.tags.includes(queryParams?.tag)
      : false;
  });
  return json({ posts, activeTagId: queryParams.tag });
};

export default function Index() {
  const { posts, activeTagId } = useLoaderData();

  return (
    <main>
      <div className="relative pt-4 pb-20 px-4 sm:px-6 lg:pt-8 lg:pb-28 lg:px-8 text-gray-100">
        <div className="absolute inset-0">
          <div className="h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-100 sm:text-4xl">
              duncan.
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-4">
              Hi, I'm Duncan Hunter, I write this blog, work for{" "}
              <a
                className="text-blue-600 hover:text-blue-400"
                href="https://zware.com.au"
              >
                zware.com.au
              </a>{" "}
              as a Lead Frontend Engineer and am a Pluralsight Author.
            </p>
            <div className="mt-8 max-w-lg mx-auto">
              <Tags activeTagId={activeTagId} />
              <div className="mt-8 max-w-lg mx-auto grid gap-5 lg:grid-cols-1 lg:max-w-none">
                <ul>
                  {posts.map((post: any) => (
                    <PostPreview key="post.slug" post={post} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
