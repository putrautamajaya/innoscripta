"use client";

import { useState } from "react";
import Filter from "./components/filter";
import NyTimesNewsList from "./components/nyTimesNewsList";
import TheGuardianNewsList from "./components/theGuardianNewsList";
import NewsAPINewsList from "./components/newsAPINewsList";
import Pagination from "./components/pagination";

export default function Home() {
  const [filter, setFilter] = useState({
    keyword: "",
    date: "",
    source: "theGuardian",
  });
  const [page, setPage] = useState(1);

  const isSourceNewsAPI = filter.source === "newsAPI";
  const issSourceTheGuardian = filter.source === "theGuardian";
  const isSourceNyTimes = filter.source === "nyTimes";

  return (
    <div className="w-screen h-screen p-4 flex flex-row justify-center items-start pt-8">
      <div className="max-w-screen-lg grow">
        <Filter onChange={(e) => setFilter(e)} />

        {isSourceNewsAPI && <NewsAPINewsList filter={filter} page={page} />}
        {isSourceNyTimes && <NyTimesNewsList filter={filter} page={page} />}
        {issSourceTheGuardian && (
          <TheGuardianNewsList filter={filter} page={page} />
        )}

        <Pagination filter={filter} onChange={(e) => setPage(e)} />
      </div>
    </div>
  );
}
