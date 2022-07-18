import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type DeleteItemState = {
  loading: boolean;
  error: string;
};

const initialState: DeleteItemState = {
  loading: false,
  error: "",
};

export const deleteItem = createAsyncThunk(
  "devices/deleteItem",
  async (id: any) => {
    return fetch(
      `https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }
    )
  }
);

export const categoriesSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(deleteItem.pending, (state: DeleteItemState) => {
      state.loading = true;
    });
    builder.addCase(deleteItem.fulfilled, (state: DeleteItemState) => {
      state.loading = false;
      state.error = "";
    });
    builder.addCase(deleteItem.rejected, (state: DeleteItemState) => {
      state.loading = false;
      state.error = "Silinemedi";
    });
  },
});

export default categoriesSlice.reducer;
