import React, { useState } from "react";
import { TextField, createTheme, ThemeProvider, Icon } from "@mui/material";
import localImage from "./images/logo_google.svg";
import Image from "next/image";
import GoogleIcon from "@mui/icons-material/Google";
import "./style.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import {useSession, signIn, signOut} from 'next-auth/react'

const logar = () => {

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

  const [content, setContent] = useState({
    email: "",
    password: "",
  });

  const onChangeInput = e => setContent({...content, [e.target.name]: e.target.value})

  const sendUser = async e => {
    e.preventDefault();
    try {
      await fetch ('http://localhost:8080/login', {
        method: 'POST',
        body: JSON.stringify(content),
        headers: {'Content-Type': 'application/json'}
      });
    } catch (error) {
   
    }
   

  }

  const { data: session } = useSession;



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

      <form className="formulario" onSubmit={sendUser}>
        <h2 className="subtitulo">Faça login com email</h2>
        <TextField
          fullWidth
          margin="normal"
          name="email"
          label="Email address"
          placeholder="Camila.ux@gmail.com"
          type="email"
          className="inputs"
          onChange={onChangeInput}
          value={content.email}
        />
        <TextField
          fullWidth
          margin="normal"
          type="password"
          name="password"
          label="Password"
          placeholder="********"
          className="inputs"
          onChange={onChangeInput}
          value={content.password}
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
