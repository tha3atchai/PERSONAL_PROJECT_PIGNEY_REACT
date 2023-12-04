import React, { useEffect } from "react";
import Route from "./routes/Route";
import { ToastContainer } from "react-toastify";
import Loading from "./components/Loading";
import { useDispatch, useSelector } from "react-redux";
import localStorageService from "./utils/local-storage";
import { fetchDataUser } from "./stores/slices/authSlice";
import {
  getDataGoal,
  getDataGoalRecord,
  getDataRecord,
  getDataRecordUser,
} from "./stores/slices/goalSlice";

function App() {
  const dispatch = useDispatch();
  const { initialLoading } = useSelector(state => state.goal);

  useEffect(() => {
    if (localStorageService.getToken()) {
      dispatch(fetchDataUser());
      dispatch(getDataGoal());
      dispatch(getDataGoalRecord());
      dispatch(getDataRecordUser());
      dispatch(getDataRecord());
    }
  }, []);

  return (
    <>
      {initialLoading && <Loading />}
      <Route />
      <ToastContainer
        position="bottom-right"
        autoClose={1800}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
