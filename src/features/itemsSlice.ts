import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type ItemsState = {
  items: [];
  loading: boolean;
  error: string;
}

const initialState: ItemsState = {
  items: [],
  loading: false,
  error: "",
};

export const getItems = createAsyncThunk("devices/getItems", async () => {
  return fetch(
    "https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/"
  ).then((res) => res.json());
});

export const itemsSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(getItems.pending, (state: ItemsState) => {
      state.loading = true;
    })
    builder.addCase(getItems.fulfilled, (state: ItemsState, action:PayloadAction<[]>) => {
      state.loading = false;
      state.error = "";
      state.items = action.payload
    })
    builder.addCase(getItems.rejected, (state: ItemsState, action:PayloadAction<[]>) => {
      state.loading = false;
      state.items = [];
      state.error = "Yüklenemedi"
    })
  }
});


export default itemsSlice.reducer;
