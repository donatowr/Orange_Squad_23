'use client'

import { useState } from "react";

import Head from "next/head";
import "./style.css";
import imagemHome from "./images/img_login.png";
import Image from "next/image";
import Formulario from "./formulario";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button, Stack } from "@mui/material";
import { redirect, useRouter } from "next/navigation";

const Login = () => {
  const { data: session } = useSession("requerid: true");
  const navigate = useRouter();

  if (!session) {
    return (
      <div>
        <Head>
        <meta charset="UTF-8"/>
         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Login</title>
        </Head>

        <main className="container">
          <Image className="image" src={imagemHome} alt="home"/>

          <section className="inputs">
            <Formulario />
          </section>
        </main>
      </div>
    );
  } else {
    navigate.push('/project')
    return (
      <button onClick={signOut}>Sair</button>
      
      )
  }
};

export default Login;

