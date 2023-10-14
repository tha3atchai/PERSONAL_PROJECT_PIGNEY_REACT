import React from 'react'
import Route from './routes/Route'
import {ToastContainer} from "react-toastify"
import { useAuth } from './hooks/use-auth';
import Loading from './components/Loading';

function App() {
  const {initialLoading} = useAuth();

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
  )
}

export default App