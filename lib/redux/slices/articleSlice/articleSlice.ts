/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: ArticleSliceStateProps = {
  articles: [],
};

const articleSlice = createSlice({
  name: "article",
  initialState,

  reducers: {
    setArticles: (state, action: PayloadAction<[]>) => {
      state.articles = action.payload;
    },
    clearArticles: (state) => {
      state.articles = [];
    },
  },
});

export const { setArticles, clearArticles } = articleSlice.actions;

export const selectArticles = (state: any) => state.article.articles;

export default articleSlice;

/* Types */
export interface ArticleSliceStateProps {
  articles: Array<{}> | undefined;
}
