import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
          name: "products",
          initialState: { collections: null, isLoading: true, triggeredCollectionName: "shirts" },
          reducers: {
                    setFetchedCollections: (state, action) => {
                              state.collections = action.payload
                    },
                    setTriggeredCollectionName: (state, action) => {
                              state.triggeredCollectionName = action.payload
                    },
                    setLoadingState: (state, action) => {
                              state.isLoading = action.payload
                    }
          }
})

export const { setFetchedCollections, setTriggeredCollectionName, setLoadingState } = productsSlice.actions;

export default productsSlice.reducer;