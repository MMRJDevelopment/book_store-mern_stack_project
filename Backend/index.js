import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PORT, dbURL } from "./config/config.js";
import booksRoute from "./routes/bookRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome To MERN Stack Tutorial");
});

app.use("/book", booksRoute);
mongoose
  .connect(dbURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listen to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
