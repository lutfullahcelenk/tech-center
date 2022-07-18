import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type AddItemState = {
  loading: boolean;
  error: string;
};

const initialState: AddItemState = {
  loading: false,
  error: "",
};

export const addItem = createAsyncThunk(
  "devices/addItem",
  async (values: any) => {
    return fetch(
      "https://62286b649fd6174ca82321f1.mockapi.io/case-study/products",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }
    ).then((res) => res.json());
  }
);

export const categoriesSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(addItem.pending, (state: AddItemState) => {
      state.loading = true;
    });
    builder.addCase(addItem.fulfilled, (state: AddItemState) => {
      state.loading = false;
      state.error = "";
    });
    builder.addCase(addItem.rejected, (state: AddItemState) => {
      state.loading = false;
      state.error = "Yüklenemedi";
    });
  },
});

export default categoriesSlice.reducer;
