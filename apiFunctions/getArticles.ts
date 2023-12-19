import axios from "axios";

const getArticles = async (setIsLoading: Function, searchQuery: string) => {
  setIsLoading(true);
  const response = await axios.get(
    `https://hn.algolia.com/api/v1/search?query=${searchQuery}`
  );
  const data = await response.data.hits;
  setIsLoading(false);
  return data;
};

export default getArticles;
