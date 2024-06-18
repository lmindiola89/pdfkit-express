import express from "express";
import indexRouets from "./routers/index.js";

const app = new express();

app.use(indexRouets);

app.listen(3000, () => {
  console.log("server on port 3000");
});
