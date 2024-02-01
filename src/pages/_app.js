import { Balance } from "@mui/icons-material";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps, session }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar="false" theme="colored" closeOnClick
rtl={true} pauseOnHover="true" transition="Bounce" progress="undefined" newestOnTop={false} draggable="true"/>
    </SessionProvider>
  );
}

export default MyApp;
