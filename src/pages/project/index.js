import * as React from "react";
import { useEffect } from "react";
import "./style.css";
import localImage from "../images/Logo_orange.png";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import StarOutline from "@mui/icons-material/StarSharp";
import Stack from "@mui/material/Stack";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import localImagePhoto from "../images/Image.png";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Head from "next/head";
import { useRouter } from "next/navigation";
import ModalAdd from "./modalButtonAdd";
import ModalPhoto from "./modalButtonPhoto";


function Project() {

  
  const [project, setProject] = useState(null);
  const [isloading, setIsloading] = useState(true);
  const navigate = useRouter();
  const [data, setData] = useState(null);
  const [create, setCreate] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("https://54.91.19.56:3000/userData", {
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
    fetch("https://54.91.19.56:3000/user/projects", {
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

  var nulo = (
    <div className="add">
      <ModalPhoto />
      <p className="title_collection">Adicione seu primeiro projeto</p>
      <p className="sub_title_collection">
        Compartilhe seu talento com milhares de pessoas
      </p>
    </div>
  );

  // if (create) {
  // nulo = (
  //     <div className="">
  //       {create &&
  //         create.map((project) => (
  //           <div key={project.id}>
  //             <img
  //               className="imageProject"
  //               src={`http://54.91.19.56:3000/${project.projectCover}`}
  //               alt={project.title}
  //             />
  //           </div>
  //         ))}
  //     </div>
  //   );
  // }

  useEffect(() => {
    if (project === null && !isloading) {
      navigate.push("/");
    }
  }, [isloading]);

  if (isloading) {
    return <p>Carregando</p>;
  }

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
                <Image className="image_project"  src={data.userImage} width={40} height={40} />
              </div>
              <div className="userInfo_addProject">
                <h1 className="userName" id="name">
                  {data && data.name }
                </h1>
                <p className="location">Brasil</p>
                <ModalAdd />
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
            <div className="add_project_server">{nulo}</div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Project;
