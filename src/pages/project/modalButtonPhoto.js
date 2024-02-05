import * as React from "react";
import "./style.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import {
  IconButton,
  TextField,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import CollectionsRoundedIcon from "@mui/icons-material/CollectionsRounded";
import { Stack } from "@mui/system";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#515255",
    },
    secundary: {
      main: "#ff5522",
    },
    tertiary: {
      main: "#ffffff",
    },
    background: {
      white: "#ffffff",
    },
  },
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 522,
  width: 890,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// const VisuallyHiddenInput = styled("input")({
//   clip: "rect(0 0 0 0)",
//   clipPath: "inset(50%)",
//   height: 1,
//   overflow: "hidden",
//   position: "absolute",
//   bottom: 0,
//   left: 0,
//   whiteSpace: "nowrap",
//   width: 5,
// });

export default function ModalAdd() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useRouter();

  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState(" ");

  const newProject = async (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    try {
      const data = new FormData();
      data.set("title", title);
      data.set("tags", tags);
      data.set("description", description);
      data.set("link", link);
      data.set("file", image);

      const response = await fetch("http://54.91.19.56:3000/project", {
        method: "POST",
        body: data,
        headers: {
          Authorization: `Bearer ${token.replace(/\"/g, "")}`,
        },
      });
if(response.ok === true){
  console.log(response);
  navigate.push('/project')
}

    } catch (error) {}
  };

  return (
    <div>
      <IconButton
        onClick={handleOpen}
        className="btn_collection"
        color="#000"
        fontSize="large"
      >
        <CollectionsRoundedIcon />
      </IconButton>
      <ThemeProvider theme={Theme}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <main className="container_modal">
              <section>
                <p className="title_modal">Adicionar Projeto </p>
                <p className="sub_title_modal">
                  Selecione o contúedo que você deseja fazer upload
                </p>
                <div className="add_photo_modal">
                  <IconButton aria-label="collection" size="large">
                    <CollectionsRoundedIcon size="large"/>
                    <Button
                      variant="text"
                      component="label"
                    >
                      <input
                        onChange={(e) => setImage(e.target.files?.[0])}
                        type="file"
                        name="image"
                        hidden
                      />
                    </Button>
                  </IconButton>
                  <p className="sub_title_collection">
                    Compartilhe seu talento com milhares de pessoas
                  </p>
                </div>
                <button className="view_project">Visualizar publicação</button>
              </section>
              <section className="container_forms_modal">
                <form className="forms_modal" onSubmit={newProject}>
                  <TextField
                    fullWidth
                    margin="normal"
                    name="title"
                    label="Titulo"
                    type="text"
                    className="inputs"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                  />
                  <TextField
                    fullWidth
                    margin="normal"
                    name="tags"
                    label="Tags"
                    type="text"
                    className="inputs"
                    onChange={(e) => setTags(e.target.value)}
                    value={tags}
                  />
                  <TextField
                    fullWidth
                    margin="normal"
                    name="link"
                    label="Link"
                    type="text"
                    className="inputs"
                    onChange={(e) => setLink(e.target.value)}
                    value={link}
                  />
                  <TextField
                    fullWidth
                    margin="normal"
                    name="description"
                    label="Descrição"
                    type="text"
                    className="description"
                    multiline
                    rows={4}
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                  />

                  <div className="buttons_modal">
                    <Stack spacing={2} direction="row">
                      <Button
                        className="save_project"
                        variant="contained"
                        type="submit"
                        color="secundary"
                      >
                        SALVAR
                      </Button>
                    </Stack>

                    <Stack spacing={2} direction="row">
                      <Button
                        className="save_project"
                        variant="text"
                        type="submit"
                        onClick={handleClose}
                        style={{ fontColor: "tertiary" }}
                      >
                        Cancelar
                      </Button>
                    </Stack>
                  </div>
                </form>
              </section>
            </main>
          </Box>
        </Modal>
      </ThemeProvider>
    </div>
  );
}
