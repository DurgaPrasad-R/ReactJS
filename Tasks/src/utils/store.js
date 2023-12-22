import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
export default store;

/**
 * Create Store
 *  - configureStore() - RTX
 *
 * Provide Store to app
 *  -<Provider store={store}>  - import from react-redux
 *
 * Slice
 *  - RTK - createSlice({
 *              name:""
 *              initial state:
 *              reducers: {
 *                  action1**
 *                  action2**
 *              }
 *          })
 *      export const {action1,action2} = cartSlice.actions
 *      export default cartSlice.reducer
 *
 * Put the created slice into the app
 *  -{
 *       reducer:{
 *          cart:cartSlice
 *       }
 *   }
 *   */
