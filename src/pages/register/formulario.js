import { TextField, createTheme, ThemeProvider, Icon } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import React, { useState } from "react";
import "./style.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import {useSession, signIn, signOut} from 'next-auth/react'

const logar = () => {
  const { data: session } = useSession;
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
        <h1 className="titulo">Cadastre-se</h1>
      </div>

      <form className="formulario">
          <TextField
            style={{width:'250.5px', marginRight:'12px'}}
            margin="normal"
            label="Nome"
            placeholder="Nome"
            className="inputs"
            
          />

          <TextField
            style={{width:'250.5px',}}
            margin="normal"
            placeholder="Sobrenome"
            className="inputs"
          />
          
        <TextField
          fullWidth
          margin="normal"
         TextField
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
          CADASTRAR
        </Button>
      </form>
    </ThemeProvider>
  );
};

export default Formulario;
