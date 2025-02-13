import { useNyTimesNewsAPI } from "../hooks/news";
import { Filter } from "./filter";
import NewsCard from "./newsCard";
import Loading from "./loading";

export interface NyTimesNews {
  abstract: string;
  headline: { main: string };
  web_url: string;
}

interface NyTimesNewsListProps {
  filter: Filter;
  page: number;
}

const NyTimesNewsList = ({ filter, page }: NyTimesNewsListProps) => {
  const { data, isFetching } = useNyTimesNewsAPI({
    keyword: filter.keyword,
    date: filter.date,
    page,
  });

  const nyTimesNewsData = data?.data?.response?.docs || [];

  if (isFetching) return <Loading />;

  return (
    <div className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-2 md:grid-cols-3">
      {nyTimesNewsData.map((d: NyTimesNews, i: number) => (
        <NewsCard
          key={i}
          abstract={d.abstract}
          headline={d.headline.main}
          imgUrl=""
          webUrl={d.web_url}
        />
      ))}
    </div>
  );
};

export default NyTimesNewsList;
