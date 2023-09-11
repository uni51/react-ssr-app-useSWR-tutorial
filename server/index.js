import path from "path";
import fs from "fs";

import React, { useReducer } from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";

import App from "../src/App";
import Userlist from "../src/UserList";

const PORT = process.env.PORT || 3006;
const app = express();

const users = ["Pedro", "Jack", "Catarina", "Michael Scott"];

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/userlist", (req, res) => {
  const app = ReactDOMServer.renderToString(<Userlist />);

  const indexFile = path.resolve("./build/index.html");
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Oops, better luck next time!");
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

app.get("/", (req, res) => {
  const app = ReactDOMServer.renderToString(<App />);

  const indexFile = path.resolve("./build/index.html");
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Oops, better luck next time!");
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

app.use(express.static("./build"));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
