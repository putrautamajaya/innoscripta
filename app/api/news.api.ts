import axios from "axios";
import { queryProps } from "../hooks/news";

export const getNewsAPI = (q: queryProps) => {
  return axios.get(
    `https://newsapi.org/v2/everything?q=${q.keyword || "news"}&from=${
      q.date
    }&to=${q.date}&pageSize=20&page=${
      q.page
    }&apiKey=743840f6f7da46c989e9dfffe731e0c3`
  );
};

export const getGuardianNewsAPI = (q: queryProps) => {
  return axios.get(
    `https://content.guardianapis.com/search?q=${q.keyword}&order-by=newest&page-size=10&page=${q.page}&from-date=${q.date}&end-date=${q.date}&api-key=c2e6ec2e-dea1-4dae-9f6a-b398d2dc45bc`
  );
};

export const getNyTimesNewsAPI = (q: queryProps) => {
  return axios.get(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${q.keyword}&pub_date=${q.date}&page=${q.page}&api-key=IeloNqU04JWXjZgL8kqdNbNoCMVKXU9u`
  );
};
