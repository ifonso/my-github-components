import express from "express";

import github from "./github";
import spotify from "./spotify";

const app = express();
const PORT = process.env.PORT ?? 443;

app.get("/spotify", (_, response) => {
  spotify
    .getMusicsCard()
    .then((card) => {
      response.header("Content-Type", "image/svg+xml");
      return response.send(card);
    })
    .catch((error) => {
      response.header("Content-Type", "application/json");
      return response.status(400).send(error);
    });
});

app.get("/github", (_, response) => {
  github
    .getTopLanguagesComponent()
    .then((card) => {
      response.header("Content-Type", "image/svg+xml");
      return response.send(card);
    })
    .catch((error) => {
      response.header("Content-Type", "application/json");
      return response.status(400).send(error);
    });
});

app.listen(PORT, () => console.log("Running at:", PORT));
