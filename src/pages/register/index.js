import Head from "next/head";
import './style.css'
import imagemHome from "../images/img_cadastro.png";
import Image from "next/image";
import Formulario from './formulario'


const Register = () => (
<>
<Head>
        <meta charset="UTF-8"/>
         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Register</title>
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