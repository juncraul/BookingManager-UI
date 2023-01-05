import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import hotelReducer from "./slices/hotelSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    hotels: hotelReducer,
  },
});
