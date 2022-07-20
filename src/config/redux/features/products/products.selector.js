import { createSelector } from "reselect";

export const selectCollections = state => state.products.collections;

export const selectTriggeredCollectionName = state => state.products.triggeredCollectionName;

export const selectTriggeredCollection = createSelector(
          [selectCollections, selectTriggeredCollectionName],
          (collections, collectionName) => collections[collectionName]
)

// export const selectTriggeredCollection = createSelector(
//           [selectCollections],
//           collections => collections["shirts"]
// )