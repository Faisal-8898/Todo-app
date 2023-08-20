import express from "express";
import connection from "./database/db.js";
import cors from "cors";
import routes from "./routes/route.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);

const PORT = 8000;

connection();

app.listen(PORT, () =>
  console.log(`Server is running successfully on ${PORT}`)
);
