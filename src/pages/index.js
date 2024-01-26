import Head from "next/head";
import "./style.css";
import imagemHome from "./images/img_login.png";
import Image from "next/image";
import Formulario from "./formulario";

const Login = () => (
  <>
    <Head>
      <title>Login</title>
    </Head>
   

    <main className="container">
      <Image className="image" src={imagemHome} />

      <section className="inputs">
        <Formulario />
      </section>
    </main>
  </>
);

export default Login;
