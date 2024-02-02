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
import { useRouter } from "next/navigation";
import Script from "next/script";

function Project() {
  const [project, setProject] = useState(null);
  const [isloading, setIsloading] = useState(true);
  const navigate = useRouter();
  const [data, setData] = useState(null);
  const [create, setCreate] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:3001/userData", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token.replace(/\"/g, "")}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setProject(response);
          return response.json();
        }
      })
      .then((data) => {
        setData(data);
        setIsloading(false);
      });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:3001/user/projects", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token.replace(/\"/g, "")}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setProject(response);
          return response.json();
        }
      })
      .then((create) => {
        setCreate(create);
        setIsloading(false);
      });
  }, []);
  

  useEffect(() => {
    if (project === null && !isloading) {
      navigate.push("/");
    }
  }, [isloading]);

  if (isloading) {
    return <p>Carregando</p>;
  }

const imgProject = create; 
console.log(imgProject[0].title);


  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Project</title>
      </Head>

      <header>
        <nav>
          <Image className="logo" src={localImage} alt="logoOrange" />
          <div className="links">
            <a href="">Meus projetos</a>
            <a href="">Descobrir</a>
          </div>
        </nav>

        <Stack direction="row" spacing={2}>
          <div className="photo">
            <Image className="photo" src={localImagePhoto} alt="photoUser" />
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
                <h1 className="userName" id="name">
                  {data.name}
                </h1>
                <p className="location">Brasil</p>
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

            <div className="add_project_server" id="addServer">
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
            <p>tags</p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Project;
