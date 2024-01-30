import { Balance } from "@mui/icons-material";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps, session }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
      <ToastContainer position="top-center" autoClose="false" hideProgressBar="true" theme="colored" closeOnClick="true" pauseOnHover="true" transition="flip" progress="undefined" draggable="true"/>
    </SessionProvider>
  );
}

export default MyApp;
