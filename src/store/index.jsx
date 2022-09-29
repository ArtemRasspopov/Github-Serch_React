import { configureStore } from "@reduxjs/toolkit";
import serchSlice from "./serchSlice/serchSlice";

export const store = configureStore({
  reducer: { serchSlice },
});
