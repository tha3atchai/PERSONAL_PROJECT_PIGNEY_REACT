import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../config/axios";

export const getDataGoal = createAsyncThunk(
  "piggygoals/dataGoals",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.get("/piggygoals");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getDataGoalRecord = createAsyncThunk(
  "piggygoals/dataGoalRecords",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.get("/piggygoals/piggyrecord");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getDataRecord = createAsyncThunk(
  "piggygoals/dataRecords",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.get("/piggygoals/record");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getDataRecordUser = createAsyncThunk(
  "piggygoals/dataRecordUsers",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.get("/piggygoals/recorduser");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFunds = createAsyncThunk(
  "piggygoals/adds",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post("/piggygoals/add", payload);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const withDraw = createAsyncThunk(
  "piggygoals/withdraws",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post("/piggygoals/withdraw", payload);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createGoal = createAsyncThunk(
  "piggygoals/createGoals",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post("/piggygoals", payload, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editGoal = createAsyncThunk(
  "piggygoals/editGoals",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.patch("/piggygoals/update", payload);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteGoal = createAsyncThunk(
  "piggygoals/deleteGoals",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.delete(`/piggygoals/delete/${payload}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateGoal = createAsyncThunk(
  "piggygoals/updateGoals",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.put(`piggygoals/success/${payload}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateGoalImage = createAsyncThunk(
  "piggygoals/updateGoalImages",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.patch(
        `/piggygoals/image/${payload.piggyId}`,
        payload.body
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const goalSlice = createSlice({
  name: "goal",
  initialState: {
    dataGoal: null,
    dataGoalRecord: null,
    dataRecord: null,
    dataRecordUser: null,
    loading: false,
    initialLoading: false,
    error: "",
    success: false,
  },
  reducers: {
    resetDataGoal: (state, { payload }) => {
      state.dataGoal = null;
    },
    resetDataGoalRecord: (state, { payload }) => {
      state.dataGoalRecord = null;
    },
    resetDataRecord: (state, { payload }) => {
      state.dataRecord = null;
    },
    resetDataRecordUser: (state, { payload }) => {
      state.dataRecordUser = null;
    },
    setInitialLoading: (state, { payload }) => {
      state.initialLoading = payload;
    },
    setUserInDataRecordUser: (state, { payload }) => {
      state.dataRecordUser.recordAndUser =
        state.dataRecordUser.recordAndUser.map(x =>
          x.userId === payload.id
            ? { ...x, user: { ...x.user, ...payload } }
            : x
        );
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getDataGoal.pending, (state, { payload }) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getDataGoal.fulfilled, (state, { payload }) => {
        state.dataGoal = payload;
        state.loading = false;
      })
      .addCase(getDataGoal.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });

    builder
      .addCase(getDataGoalRecord.pending, (state, { payload }) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getDataGoalRecord.fulfilled, (state, { payload }) => {
        state.dataGoalRecord = payload;
        state.loading = false;
      })
      .addCase(getDataGoalRecord.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });

    builder
      .addCase(getDataRecord.pending, (state, { payload }) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getDataRecord.fulfilled, (state, { payload }) => {
        state.dataRecord = payload;
        state.loading = false;
      })
      .addCase(getDataRecord.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });

    builder
      .addCase(getDataRecordUser.pending, (state, { payload }) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getDataRecordUser.fulfilled, (state, { payload }) => {
        state.dataRecordUser = payload;
        state.loading = false;
      })
      .addCase(getDataRecordUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });

    builder
      .addCase(addFunds.pending, (state, { payload }) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(addFunds.fulfilled, (state, { payload }) => {
        state.dataRecordUser.recordAndUser.push(payload.record);
        state.dataGoal.myGoal.map(x =>
          x.id === payload.record.piggyId
            ? (x.currentAmount += payload.record.fund)
            : x
        );
        const { user, targetPiggy, ...newRecord } = payload.record;
        state.dataGoalRecord.piggyAndRecord.push({
          ...newRecord,
          piggy: targetPiggy,
        });
        state.dataRecord.myRecord.push(newRecord);
        state.loading = false;
      })
      .addCase(addFunds.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });

    builder
      .addCase(withDraw.pending, (state, { payload }) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(withDraw.fulfilled, (state, { payload }) => {
        state.dataRecordUser.recordAndUser.push(payload.record);
        state.dataGoal.myGoal.map(x =>
          x.id === payload.record.piggyId
            ? (x.currentAmount -= payload.record.fund)
            : x
        );
        const { user, targetPiggy, ...newRecord } = payload.record;
        state.dataGoalRecord.piggyAndRecord.push({
          ...newRecord,
          piggy: targetPiggy,
        });
        state.dataRecord.myRecord.push(newRecord);
        state.loading = false;
      })
      .addCase(withDraw.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });

    builder
      .addCase(createGoal.pending, (state, { payload }) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(createGoal.fulfilled, (state, { payload }) => {
        state.dataGoal.myGoal.push(payload.goal);
        state.loading = false;
      })
      .addCase(createGoal.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });

    builder
      .addCase(editGoal.pending, (state, { payload }) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(editGoal.fulfilled, (state, { payload }) => {
        state.dataGoal.myGoal = state.dataGoal.myGoal.map(x =>
          x.id === payload.newGoal.id ? { ...x, ...payload.newGoal } : x
        );
        state.loading = false;
      })
      .addCase(editGoal.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });

    builder
      .addCase(deleteGoal.pending, (state, { payload }) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(deleteGoal.fulfilled, (state, { payload }) => {
        state.dataGoal.myGoal = state.dataGoal.myGoal.filter(
          x => x.id !== payload.piggyId
        );
        state.loading = false;
      })
      .addCase(deleteGoal.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });

    builder
      .addCase(updateGoal.pending, (state, { payload }) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(updateGoal.fulfilled, (state, { payload }) => {
        state.dataGoal.myGoal = state.dataGoal.myGoal.map(x =>
          x.id === payload.result.id ? { ...x, ...payload.result } : x
        );
        state.loading = false;
      })
      .addCase(updateGoal.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });

    builder
      .addCase(updateGoalImage.pending, (state, { payload }) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(updateGoalImage.fulfilled, (state, { payload }) => {
        state.dataGoal.myGoal = state.dataGoal.myGoal.map(x =>
          x.id === payload.id ? { ...x, ...payload } : x
        );
        state.loading = false;
      })
      .addCase(updateGoalImage.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const {
  resetDataGoal,
  resetDataGoalRecord,
  resetDataRecord,
  resetDataRecordUser,
  setInitialLoading,
  setUserInDataRecordUser,
} = goalSlice.actions;

export default goalSlice.reducer;
