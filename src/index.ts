import express from "express";
import cors from "cors";
import { fa, faker } from "@faker-js/faker";
import type { Post } from "./types";
import { posts } from "./db";
import { getCurrentDate } from "./utils";

const app = express();
app.use(cors()); // CORS - Allow access any domain requesting to this server
app.use(express.json()); // Parse JSON body

app.get("/posts", (req, res) => {
  const data: Post[] = posts;
  res.send(data);
});

app.post("/newpost", (req, res) => {
  const id: string = faker.string.uuid();
  const _newpost: Post = {
    id,
    author: req.body.author,
    content: req.body.content,
    title: req.body.title,
    createdAt: getCurrentDate(),
    imageUrl: req.body.imageUrl ? req.body.imageUrl : undefined,
  };
  posts.push(_newpost);

  res.send(_newpost);
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}..`));
