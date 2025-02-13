import { useQuery } from "@tanstack/react-query";
import {
  getGuardianNewsAPI,
  getNewsAPI,
  getNyTimesNewsAPI,
} from "../api/news.api";

export interface queryProps {
  keyword: string;
  date: string;
  page: number;
}

export const useQueryNewsAPI = (query: queryProps) => {
  return useQuery({
    queryKey: ["newsAPI", query.keyword, query.date, query.page],
    queryFn: () => getNewsAPI(query),
  });
};

export const useGuardianNewsAPI = (query: queryProps) => {
  return useQuery({
    queryKey: ["guardian", query.keyword, query.date, query.page],
    queryFn: () => getGuardianNewsAPI(query),
  });
};

export const useNyTimesNewsAPI = (query: queryProps) => {
  return useQuery({
    queryKey: ["nyTimes", query.keyword, query.date, query.page],
    queryFn: () => getNyTimesNewsAPI(query),
  });
};
