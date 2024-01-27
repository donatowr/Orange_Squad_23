import  { useState } from "react";
import Head from "next/head";
import "./style.css";
import imagemHome from "./images/img_login.png";
import Image from "next/image";
import Formulario from "./formulario";

function Login() {

  return (
    <div>

      <Head>
        <title>Login</title>
      </Head>

      <main className="container">
        <Image className="image" src={imagemHome} />

        <section className="inputs">
          <Formulario />
        </section>
      </main>
    </div>
    
  );
}

export default Login;
