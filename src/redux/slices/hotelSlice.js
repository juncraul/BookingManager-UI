import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBaseURLs } from './../../Environment';

export const hotelSlice = createSlice({
  name: "hotels",
  initialState: { hotel: [], imageBlob: [], hotelId: {}, imageId: {} },
  reducers: {
    setHotels(state, action) {
      state.hotel = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHotels.fulfilled, (state, action) => {
      state.hotel = action.payload;
      localStorage.setItem("hotels", JSON.stringify(state.hotel));
    });

    builder.addCase(fetchImages.fulfilled, (state, action) => {
      state.imageBlob = [action.payload, ...state.imageBlob];
    });

    builder.addCase(fetchHotelById.fulfilled, (state, action) => {
      state.hotelId = action.payload;
      localStorage.setItem("hotel", JSON.stringify(state.hotelId));
    });

    builder.addCase(fetchImageForOneHotel.fulfilled, (state, action) => {
      state.imageId = action.payload;
    });
  },
});

export const { setHotels } = hotelSlice.actions;

export default hotelSlice.reducer;

export const fetchHotels = createAsyncThunk("getHotels", async () => {
  const request = await axios.get(
    `${apiBaseURLs.BookingManagerBackEnd}/hotel/get-hotels?reCaptchaToken=s`
  );

  if (request.status < 400) {
    return request.data;
  }
});

export const fetchImages = createAsyncThunk(
  "fetchHotelImage",
  async (hotelId) => {
    const request = await axios.get(
      `${apiBaseURLs.BookingManagerBackEnd}/image/get-image-by-id/${hotelId}`,
      { responseType: "arraybuffer" }
    );

    if (request.status < 400) {
      const data = await request.data;
      const blob = new Blob([data]);
      const url = URL.createObjectURL(blob);
      return url;
    }
  }
);

export const fetchHotelById = createAsyncThunk(
  "fetchHotelById",
  async (hotelId) => {
    const request = await axios.get(
      `${apiBaseURLs.BookingManagerBackEnd}/hotel/get-hotel-by-id/${hotelId}?reCaptchaToken=a`
    );

    if (request.status < 400) {
      const data = await request.data;
      return data;
    }
  }
);

export const fetchImageForOneHotel = createAsyncThunk(
  "fetchImageForOneHotel",
  async (hotelId) => {
    const request = await axios.get(
      `${apiBaseURLs.BookingManagerBackEnd}/image/get-image-by-id/${hotelId}`,
      { responseType: "arraybuffer" }
    );

    if (request.status < 400) {
      const data = await request.data;
      const blob = new Blob([data]);
      const url = URL.createObjectURL(blob);
      return url;
    }
  }
);
