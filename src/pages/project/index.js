import React, { useEffect } from "react";
import "./style.css";
import localImage from "../images/Logo_orange.png";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import StarOutline from "@mui/icons-material/StarSharp";
import Stack from "@mui/material/Stack";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import localImagePhoto from "../images/Image.png";
import { useState } from "react";
import { UseSession, signIn, signOut } from "next-auth/react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CollectionsRoundedIcon from "@mui/icons-material/CollectionsRounded";
import Head from "next/head";
import Modal from "../../app/app";





function Project() {

  const [token, setToken] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
     setToken(localStorage.getItem('token'));
        }
  }, [])


  

  const [projetc, setProject] = useState([]);

  
  
fetch("http://localhost:3001/user/projects", {
      method: 'GET',
      headers: {
          'Autorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
        
      })
   

    .then(response => {
      console.log('cheguei no then')
setProject(response)
console.log(response)
      return response.json();
    })
    console.log(projetc)
    console.log(token, 'final')


  
return (

  
  <>
    <Head>
    <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Project</title>
    </Head>

    <header>
    <nav>
        <Image className="logo" src={localImage} />
        <div className="links">
        <a href="">Meus projetos</a>
        <a href="">Descobrir</a>
        </div>
        </nav>
        
      <Stack direction="row" spacing={2}>
        <div className="photo">
          <Image className="photo" src={localImagePhoto} />
        </div>

        <div>
          <>
            <IconButton className="notificacao" color="#FFFFFF" size="medium">
              <NotificationsActiveIcon />
              </IconButton>
              </>
              </div>

        <div>
          <>
            <IconButton color="inherit" size="medium">
              <StarOutline />
            </IconButton>
          </>
        </div>
      </Stack>
    </header>

      <main className="content">
    
      
      <section>
            <div className="content_upper">
            <div className="content_image_user">
                <div>
                  <Image className="image_project" src={localImagePhoto} />
                </div>
                <div className="userInfo_addProject">
                  <h1 className="userName">Camila Soares</h1>
                  <p className="locatation">Brasil</p>
             <Modal />
                </div>
                </div>
                </div>
                <div className="content_under">
              <h1 className="title_project">Meus Projetos</h1>
              <TextField
                className="seach_project"
                label="Buscar tags"
                variant="outlined"
                size="medium"
              />

              <div className="add_project_server">
                <div className="add">
                  <IconButton
                    className="btn_collection"
                    color="#000"
                    fontSize="large"
                    href=""
                   
                  >
                    <CollectionsRoundedIcon />
                  </IconButton>

                  <p className="title_collection">
                    Adicione seu primeiro projeto
                  </p>
                  <p className="sub_title_collection">
                    Compartilhe seu talento com milhares de pessoas
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          
          
          
          </main>
          </>
          )
          
        }
      
          export default Project;
          