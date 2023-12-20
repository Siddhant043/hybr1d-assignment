/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: ArticleSliceStateProps = {
  searchText: "",
  articles: [],
};

const articleSlice = createSlice({
  name: "article",
  initialState,

  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    setArticles: (state, action: PayloadAction<[]>) => {
      state.articles = action.payload;
    },
    clearArticles: (state) => {
      state.articles = [];
    },
  },
});

export const { setSearchText, setArticles, clearArticles } =
  articleSlice.actions;

export const selectArticles = (state: any) => state.article.articles;
export const selectSearchText = (state: any) => state.article.searchText;

export default articleSlice;

/* Types */
export interface ArticleSliceStateProps {
  searchText: String;
  articles: Array<{}> | undefined;
}
