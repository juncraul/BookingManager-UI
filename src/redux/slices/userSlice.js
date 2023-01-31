import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBaseURLs } from './../../Environment';

const initialState = {
  id: "",
  username: "",
  mainImage: "",
  token: "",
  loading: false,
  hasErrors: false,
  success: false,
  errorMessage: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    changeErrorState: (state) => {
      state.hasErrors = false;
    },
    logoutuser: (state) => {
      state.success = false;
      state.id = "";
      state.username = "";
      state.mainImage = "";
      state.token = "";
      console.log(state);
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchImage.fulfilled, (state, action) => {
      state.image.push(action.payload);
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload[0];
      state.id = action.payload[1];
      state.success = true;
      localStorage.setItem("user", JSON.stringify(state));
      console.log(state);
    });
    builder.addCase(signupUser.fulfilled, (state) => {
      state.success = true;
      state.errorMessage = "";
    });
    builder.addCase(signupUser.rejected, (state, action) => {
      state.hasErrors = true;
      state.errorMessage = action.payload;
      state.success = false;
    });
    builder.addCase(getFullUserData.fulfilled, (state, action) => {
      state.mainImage = action.payload.mainImage;
    });
  },
});

export const { changeErrorState, logoutuser } = userSlice.actions;

export default userSlice.reducer;

export const fetchImage = createAsyncThunk("getImage", async () => {
  const response = await axios.get(
    `${apiBaseURLs.BookingManagerBackEnd}/image/get-first-image`,
    { responseType: "arraybuffer" }
  );

  if (response.status < 400) {
    const data = response.data;
    const blob = new Blob([data]);
    const url = URL.createObjectURL(blob);
    return url;
  }
});

export const loginUser = createAsyncThunk("login", async (user) => {
  const response = await axios.post(
    `${apiBaseURLs.BookingManagerBackEnd}/user/login?reCaptchaToken=dsadsa`,
    user
  );
  if (response.status < 400) {
    console.log("succesfully logged in with the response ", response.data);
    return response.data;
  }
});

export const signupUser = createAsyncThunk("signup", async (user) => {
  const response = await axios
    .post(`${apiBaseURLs.BookingManagerBackEnd}/user/signup?reCaptchaToken=dsadsa`, user)
    .catch((error) => {
      throw new Error();
    });
  if (response.status < 400) {
    console.log("succesfully logged in with the response ", response.data);
    return response.data;
  } else {
    throw new Error();
  }
});

export const getFullUserData = createAsyncThunk("getUser", async () => {
  const items = JSON.parse(localStorage.getItem("user"));
  if (items) {
    const request = await axios.get(
      `${apiBaseURLs.BookingManagerBackEnd}/user/get-user-by-id/${items.id}`,
      {
        headers: {
          Authorization: `Bearer ${items.token}`,
        },
      }
    );
    if (request.status < 400) {
      console.log(request.data);
      return request.data;
    }
  } else {
    throw new Error("user not logged in!");
  }
});
