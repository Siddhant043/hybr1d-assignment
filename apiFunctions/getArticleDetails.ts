import axios from "axios";

const getArticleDetails = async (id: string, setIsLoading: Function) => {
  setIsLoading(true);
  const response = await axios.get(`https://hn.algolia.com/api/v1/items/${id}`);
  const data = await response.data;
  setIsLoading(false);
  return data;
};

export default getArticleDetails;
