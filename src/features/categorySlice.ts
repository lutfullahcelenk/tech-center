import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type CategoriesState = {
  categories: [];
  loading: boolean;
  error: string;
}

const initialState: CategoriesState = {
  categories: [],
  loading: false,
  error: "",
};

export const getCategories = createAsyncThunk("devices/getCategories", async () => {
  return fetch(
    "https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/"
  ).then((res) => res.json());
});

export const categoriesSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(getCategories.pending, (state: CategoriesState) => {
      state.loading = true;
    })
    builder.addCase(getCategories.fulfilled, (state: CategoriesState, action:PayloadAction<[]>) => {
      state.loading = false;
      state.error = "";
      state.categories = action.payload
    })
    builder.addCase(getCategories.rejected, (state: CategoriesState, action:PayloadAction<[]>) => {
      state.loading = false;
      state.categories = [];
      state.error = "Yüklenemedi"
    })
  }
});


export default categoriesSlice.reducer;
