import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import localStorageService from "../../utils/local-storage";
import axios from "../../config/axios";
import { toast } from "react-toastify";

export const registerUser = createAsyncThunk(
  "auths/register",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post("/auth/register", payload);
      return res.data;
    } catch (error) {
      toast.error(error.response?.data.message, {
        style: {
          backgroundColor: "#a66cff",
        },
        theme: "light",
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auths/login",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post("/auth/login", payload);
      return res.data;
    } catch (error) {
      toast.error(error.response?.data.message, {
        style: {
          backgroundColor: "#cff500",
        },
        theme: "light",
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchDataUser = createAsyncThunk(
  "auths/dataUsers",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.get("/auth/me");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateProfile = createAsyncThunk(
  "auths/updateProfiles",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.patch("/user", payload);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    dataUser: null,
    loading: false,
    error: "",
    success: false,
  },
  reducers: {
    resetDataUser: (state, { payload }) => {
      state.dataUser = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, (state, { payload }) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        localStorageService.setToken(payload.token);
        state.dataUser = payload.user;
        state.loading = false;
        state.success = true;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });

    builder
      .addCase(loginUser.pending, (state, { payload }) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        localStorageService.setToken(payload.token);
        state.dataUser = payload.user;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });

    builder
      .addCase(fetchDataUser.pending, (state, { payload }) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchDataUser.fulfilled, (state, { payload }) => {
        state.dataUser = payload.user;
        state.loading = false;
      })
      .addCase(fetchDataUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });

    builder
      .addCase(updateProfile.pending, (state, { payload }) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(updateProfile.fulfilled, (state, { payload }) => {
        state.dataUser = payload;
        state.loading = false;
      })
      .addCase(updateProfile.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { resetDataUser } = authSlice.actions;

export default authSlice.reducer;
