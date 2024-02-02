import { SessionProvider } from "next-auth/react";
import React from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps, session }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar="false"
        theme="colored"
        pauseOnHover="false"
        transition="Bounce"
        progress=""
        newestOnTop={true}
        draggable="false"
      />
    </SessionProvider>
  );
}

export default MyApp;
