import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

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

export const fetchItems = createAsyncThunk("devices/fetchItems", async () => {
  return fetch(
    "https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/"
  ).then((res) => res.json());
});


export const itemsSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {
    getItem: (state, action: PayloadAction<any>) => {
      return state?.items?.find((item:any)=> item.id === action.payload)
    },
  },
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
  }
});


export const { getItem } = itemsSlice.actions

export default itemsSlice.reducer;
