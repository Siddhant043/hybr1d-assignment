import axios from "axios";

const getArticles = async () => {
  const response = await axios.get(
    "https://hn.algolia.com/api/v1/search?query=match"
  );
  const data = await response.data.hits;
  console.log(data);
};

export default getArticles;
