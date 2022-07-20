import { createSelector } from "reselect";

export const selectCollections = state => state.products.collections;

export const selectTriggeredCollectionName = state => state.products.triggeredCollectionName;

export const selectTriggeredCollection = createSelector(
          [selectCollections, selectTriggeredCollectionName],
<<<<<<< HEAD
          (collections, collectionName) => collections ? collections[collectionName] : []
)
=======
          (collections, collectionName) => collections[collectionName]
)

// export const selectTriggeredCollection = createSelector(
//           [selectCollections],
//           collections => collections["shirts"]
// )
>>>>>>> 4843a7dae4a05d5068f853dadeb1be65786a1c83
