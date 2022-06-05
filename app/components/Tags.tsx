import { Link } from "@remix-run/react";

export type Tag = { id: string; label: string };

export default function Tags({
  activeTagId: activeTagId,
}: {
  activeTagId: string | undefined;
}) {
  const tags: Tag[] = [
    {
      id: "all",
      label: "All",
    },
    {
      id: "stencil",
      label: "Stencil",
    },
    {
      id: "designSystems",
      label: "Design Systems",
    },
    { id: "talks", label: "Talks" },
    { id: "courses", label: "Courses" },
  ];

  return (
    <div className="flex space-x-4 flex-wrap">
      {tags.map((tag) => (
        <Link to={`?tag=${tag.id}`} key={tag.id} className="p-2">
          <button
            type="button"
            className={`whitespace-nowrap inline-flex items-center px-2.5 py-1.5 border border-gray-700 shadow-sm text-xs font-medium rounded text-gray-100 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 ${
              activeTagId === tag.id
                ? "bg-gray-700 text-gray-200 hover:text-gray-100"
                : ""
            }`}
          >
            {tag.label}
          </button>
        </Link>
      ))}
    </div>
  );
}
