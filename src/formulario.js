import { TextField, createTheme, ThemeProvider, Icon } from "@mui/material";
import localImage from "./pages/images/logo_google.svg";
import Image from "next/image";
import GoogleIcon from "@mui/icons-material/Google";
import React, { useState } from "react";
import "../src/pages/style.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import {useSession, signIn, signOut} from 'next-auth/react'

const logar = () => {
  const { data: session } = useSession;

  if (session) {
    return (      
        <p>Bem Vindo, {session.user.email}</p>
    );
  } else {
    
    return (      
      <Stack className="posicao_botao" spacing={2} direction="colunm">
      <button onClick={() => signIn() }  className="botao_google" variant="outlined">
        Entrar com Google
      </button>
        </Stack>

    );
  }
};

const Theme = createTheme({
  palette: {
    primary: {
      main: "#515255",
    },
    secundary: {
      main: "#ff5522",
    },
    background: {
      white: "#ffffff",
    },
  },
  typography: {
    fontfamily: "Roboto, sans-serif",
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 26 /* 173.333% */,
    letterSpacing: 0.46,
  },
  shape: {
    borderRadius: 5,
  },
  layout: {
    width: 517,
    height: 128,
    gap: 16,
    flexShrink: 0,
  },
});

const Formulario = () => {
  return (
    <ThemeProvider theme={Theme}>
      <div className="container_titulo">
        <h1 className="titulo">Entre no Orange Portfólio</h1>

        <Stack className="posicao_botao" spacing={2} direction="colunm">
        <Button onClick={() => signIn('google') } className="botao_google" variant="outlined">
        Entrar com Google
      </Button>
        </Stack>
      </div>

      <form className="formulario">
        <h2 className="subtitulo">Faça login com email</h2>
        <TextField
          fullWidth
          margin="normal"
          label="Email address"
          placeholder="Camila.ux@gmail.com"
          type="email"
          className="inputs"
        />
        <TextField
          fullWidth
          margin="normal"
          label="Password"
          placeholder="********"
          className="inputs"
        />
        <Button
          className="enviar"
          variant="contained"
          color="secundary"
          type="submit"
        >
          Enviar
        </Button>
        <a className="link_cadastro" href="">
          Cadastre-se
        </a>
      </form>
    </ThemeProvider>
  );
};

export default Formulario;
