import { createAsyncThunk, createSlice, unwrapResult } from "@reduxjs/toolkit";
import axios from "axios";

export const hotelSlice = createSlice({
  name: "hotels",
  initialState: { hotel: [], imageBlob: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHotels.fulfilled, (state, action) => {
      fetchImages(
        action.payload.map((item) => {
          return item.id;
        })
      );
      state.hotel = action.payload;
      localStorage.setItem("hotels", JSON.stringify(state.hotel));
    });

    builder.addCase(fetchImages.fulfilled, (state, action) => {
      state.imageBlob.push(action.payload);
    });
  },
});

export default hotelSlice.reducer;

export const fetchHotels = createAsyncThunk("getHotels", async () => {
  const request = await axios.get(
    "https://localhost:7221/hotel/get-hotels?reCaptchaToken=s"
  );

  if (request.status < 400) {
    return request.data;
  }
});

export const fetchImages = createAsyncThunk(
  "fetchHotelImage",
  async (hotelId) => {
    const request = await axios.get(
      `https://localhost:7221/image/get-image-by-id/${hotelId}`,
      { responseType: "blob" }
    );

    if (request.status < 400) {
      const url = URL.createObjectURL(request.data);
      return url;
    }
  }
);

export const getUsersAndImage = async (dispatch) => {
  const result = await dispatch(fetchHotels);
  const originalPromiseResult = unwrapResult(result);
  console.log(originalPromiseResult);
};
