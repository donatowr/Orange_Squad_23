import React, { useState } from "react";
import { TextField, createTheme, ThemeProvider } from "@mui/material";
import "./style.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";



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

  const navigate = useRouter();
 

  const onChangeInput = (e) =>
    setContent({ ...content, [e.target.name]: e.target.value });

  const sendUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        body: JSON.stringify(content),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        const responseData = await response.json();
        localStorage.setItem("token", JSON.stringify(responseData.token));

       navigate.push('/project')
    
      }
    } catch (error) {

    }
  }

  return (
    <ThemeProvider theme={Theme}>
      <div className="container_titulo">
        <h1 className="titulo">Entre no Orange Portfólio</h1>

        <Stack className="posicao_botao" spacing={2} direction="colunm">
          <Button
            onClick={() => signIn("google")}
            className="botao_google"
            variant="outlined"
          >
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
          margin-button={8}
        />
        <Button
          className="enviar"
          variant="contained"
          color="secundary"
          type="submit"
        >
          Enviar
        </Button>
        <Link style={{"textDecoration": "none"}} href={'/register'}> Cadastre - se       
        </Link>
      </form>
    </ThemeProvider>
  );
};

export default Formulario;
