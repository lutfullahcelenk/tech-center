import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type ItemsState = {
  items: [];
  selectedItem: any;
  loading: boolean;
  error: string;
}

const initialState: ItemsState = {
  items: [],
  selectedItem: {},
  loading: false,
  error: "",
};

export const fetchItems = createAsyncThunk("devices/fetchItems", async () => {
  return fetch(
    "https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/"
  ).then((res) => res.json());
});

export const getItem = createAsyncThunk("devices/getItem", async (id: any) => {
  return fetch(
    `https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`
  ).then((res) => res.json());
});


export const itemsSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(fetchItems.pending, (state: ItemsState) => {
      state.loading = true;
    })
    builder.addCase(fetchItems.fulfilled, (state: ItemsState, action:PayloadAction<[]>) => {
      state.loading = false;
      state.error = "";
      state.items = action.payload
    })
    builder.addCase(fetchItems.rejected, (state: ItemsState) => {
      state.loading = false;
      state.items = [];
      state.error = "Yüklenemedi"
    })

    //getItem
    builder.addCase(getItem.pending, (state: ItemsState) => {
      state.loading = true;
    })
    builder.addCase(getItem.fulfilled, (state: ItemsState, action:PayloadAction<[]>) => {
      state.loading = false;
      state.error = "";
      state.selectedItem = action.payload
    })
    builder.addCase(getItem.rejected, (state: ItemsState) => {
      state.loading = false;
      state.selectedItem = [];
      state.error = "Yüklenemedi"
    })
  }
});


export default itemsSlice.reducer;
