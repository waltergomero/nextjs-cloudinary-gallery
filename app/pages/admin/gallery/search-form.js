"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function SearchForm({ initialSearch }) {
  const [tagName, setTagName] = useState(initialSearch ?? "");
  const router = useRouter();

  useEffect(() => {
    setTagName(initialSearch);
  }, [initialSearch]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.replace(`/pages/admin/gallery?search=${encodeURIComponent(tagName)}`);
        router.refresh();
      }}
    >
      <label htmlFor="tag-name" className="text-right">
        Search By Tag
      </label>
      <div className="flex gap-2">
        <input
          onChange={(e) => setTagName(e.currentTarget.value)}
          id="tag-name"
        type="text"
        />
        <button type="submit">Search</button>
      </div>
    </form>
  );
}
