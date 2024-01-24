import Head from 'next/head'
import './style.css';
import localImage from "../images/img_login.png";
import Image from 'next/image';



const Login = () => (
  <>  
<Head>
  <title>Login</title>
  
</Head>

<main className='container'>
<Image className='image' src={localImage}
/>

<section className='content'>

<div className='titulo'>
      <h1 className='titulo'>Entre no Orange Portfólio</h1>
</div>

  <h2 className='subtitulo'>Faça login com email</h2>  

  <input className='botoeslogin'  type='email' placeholder=' Camila.ux@gmail.com'></input>

  <input className='botoeslogin'  type='password'></input>


  <button className='entrar' type='submit'>Entrar</button>

  <a className='link_cadastro' href=''>Cadastre-se</a> 

  </section>


 

 </main> 
 
 
 
 
 
</>


  
  
)
export default Login