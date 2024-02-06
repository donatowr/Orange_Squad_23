import React, { useState } from "react";
import { TextField, createTheme, ThemeProvider } from "@mui/material";
import "./style.css";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
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
    name: "",
    secondName: "",
    email: "",
    password: "",
  });

  const navigate = useRouter()

  const onChangeInput = (e) =>
    setContent({ ...content, [e.target.name]: e.target.value });

  const newUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://54.91.19.56:3000/register", {
        method: "POST",
        body: JSON.stringify(content),
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        credentials: "omit",
      });

      if (response.ok) {
        
        toast.success('Cadastro feito com Sucesso');
        navigate.push('/')

      }else {        
        toast.error('Tente Novamente!');
      }



    } catch (error) {}
  };

  return (
    <ThemeProvider theme={Theme}>
      <div className="container_titulo">
        <h1 className="titulo">Cadastre-se</h1>
      </div>
      <form className="formulario" onSubmit={newUser}>
        <TextField
          style={{ width: "250.5px", marginRight: "12px" }}
          margin="normal"
          name="name"
          label="Nome"
          required="required"
          placeholder="Nome"
          className="inputs"
          onChange={onChangeInput}
          value={content.name}
        />

        <TextField
          style={{ width: "250.5px" }}
          margin="normal"
          label="Sobrenome"
          required="required"
          name="secondName"
          placeholder="Sobrenome"
          className="inputs"
          onChange={onChangeInput}
          value={content.secondName}
        />

        <TextField
          fullWidth
          margin="normal"
          name="email"
          required="required"
          placeholder="Camila.ux@gmail.com"
          label="Email Address"
          type="email"
          className="inputs"
          onChange={onChangeInput}
          value={content.email}
        />
        <TextField
          fullWidth
          margin="normal"
          required="required"
          name="password"
          type="password"
          label="Password"
          placeholder="******** (minímo 8 digitos)"
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
          CADASTRAR
        </Button>
      </form>
    </ThemeProvider>

   

  );
};

export default Formulario;
