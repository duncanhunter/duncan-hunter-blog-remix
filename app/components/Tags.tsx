export type Tag = { id: string; label: string };

export default function Tags({
  activeTags,
  setActiveTags,
}: {
  activeTags: Record<string, Tag>;
  setActiveTags: React.Dispatch<React.SetStateAction<Record<string, Tag>>>;
}) {
  const tags: Tag[] = [
    {
      id: "stencil",
      label: "Stencil",
    },
    {
      id: "designSystem",
      label: "Design System",
    },
    { id: "talks", label: "Talks" },
    { id: "courses", label: "Courses" },
  ];

  function toggleTag(tag: Tag): void {
    if (activeTags[tag.id]) {
      delete activeTags[tag.id];
      setActiveTags({ ...activeTags });
    } else {
      setActiveTags({ ...activeTags, [tag.id]: tag });
    }
  }

  return (
    <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
      {tags.map((tag) => (
        <button
          type="button"
          className={`inline-flex items-center px-2.5 py-1.5 border border-gray-700 shadow-sm text-xs font-medium rounded text-gray-100 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 ${
            activeTags[tag.id]
              ? "bg-gray-700 text-gray-200 hover:text-gray-100"
              : ""
          }`}
          onClick={() => toggleTag(tag)}
        >
          {tag.label}
        </button>
      ))}
    </div>
  );
}
