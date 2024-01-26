import Head from "next/head";
import './style.css'
import imagemHome from "../images/img_cadastro.png";
import Image from "next/image";
import Formulario from './formulario'

const Register = () => (
<>
<Head>
      <title>Cadastro</title>
    </Head>

<main className="container">
<Image className="image" src={imagemHome} />
  <section className="inputs">
    <Formulario />
  </section>

</main>
</>
)
  
export default Register