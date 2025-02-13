"use client";

import { useGuardianNewsAPI } from "../hooks/news";
import { Filter } from "./filter";
import NewsCard from "./newsCard";
import Loading from "./loading";
import NoNews from "./noNews";

export interface TheGuardianNews {
  webTitle: string;
  webUrl: string;
}

interface TheGuardianNewsProps {
  filter: Filter;
  page: number;
}

const TheGuardianNewsList = ({ filter, page }: TheGuardianNewsProps) => {
  const { data, isFetching } = useGuardianNewsAPI({
    keyword: filter.keyword,
    date: filter.date,
    page,
  });

  const guardianNewsData = data?.data?.response?.results || [];

  if (isFetching) return <Loading />;
  if (guardianNewsData.length === 0) return <NoNews />;

  return (
    <div className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-2 md:grid-cols-3">
      {guardianNewsData.map((d: TheGuardianNews, i: number) => (
        <NewsCard
          key={i}
          abstract=""
          headline={d.webTitle}
          imgUrl="guardian.webp"
          webUrl={d.webUrl}
        />
      ))}
    </div>
  );
};

export default TheGuardianNewsList;
