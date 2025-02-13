import { useQueryNewsAPI } from "../hooks/news";
import { Filter } from "./filter";
import NewsCard from "./newsCard";
import Loading from "./loading";
import NoNews from "./noNews";

export interface NewsAPINews {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

interface NewsAPINewsProps {
  filter: Filter;
  page: number;
}

const NewsAPINewsList = ({ filter, page }: NewsAPINewsProps) => {
  const { data, isFetching } = useQueryNewsAPI({
    keyword: filter.keyword,
    date: filter.date,
    page,
  });
  const guardianNewsData = data?.data?.articles || [];

  if (isFetching) return <Loading />;
  if (guardianNewsData.length === 0) return <NoNews />;

  return (
    <div className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-2 md:grid-cols-3">
      {guardianNewsData.map((d: NewsAPINews, i: number) => (
        <NewsCard
          key={i}
          abstract={d.description}
          headline={d.title}
          imgUrl={d.urlToImage}
          webUrl={d.url}
        />
      ))}
    </div>
  );
};

export default NewsAPINewsList;
