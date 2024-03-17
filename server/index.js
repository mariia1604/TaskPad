import express from "express";
import { sql } from "./db.js";
import { register } from "./controllers/register.js";
import { auth } from "./controllers/auth.js";
import { roleMiddleware } from "./middlewares/roleMiddleware.js";
import cors from "cors";
import path from "path";
import jwt from "jsonwebtoken";

//порт на котором будет работать сервер
const PORT = 3000;

//сама переменная сервера
const app = express();

//чтобы сервер понимал json
app.use(express.json());
app.use(cors());

app.get("/", roleMiddleware(["ADMIN"]), async (req, res) => {
  const data = await sql`select * from Users`;
  res.send(data);
});

//ветка регистрации
app.post("/reg", register);
//ветка логина
app.post("/auth", auth);

app.post("/add_workspace", roleMiddleware(["USER"]), async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).send("Name is required");
  }

  console.log(name);
  console.log(req.headers.authorization);
  const token = req.headers.authorization.split(" ")[1];
  const { id } = jwt.verify(token, "SECRET_KEY");

  // Вставка данных в базу данных
  try {
    await sql`INSERT INTO Workspaces(name, user_id) values(${name}, ${id})`;
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

//функция старта приложения
const start = async () => {
  //создаем таблицы
  await sql`create table if not exists Roles(
        role varchar(100) unique primary key
    )`;

  await sql`create table if not exists Users(
        id SERIAL PRIMARY KEY NOT NULL,
        name varchar(100) NOT NULL,
        email varchar(100),
        role varchar(100),
        password varchar(100),
        FOREIGN KEY (role) REFERENCES Roles(role)
    )`;

  await sql`create table if not exists Workspaces(
        id SERIAL PRIMARY KEY NOT NULL,
        name varchar(100) NOT NULL,
        user_id SERIAL NOT NULL,
        FOREIGN KEY (user_id) REFERENCES Users(id)
    )`;

  await sql`create table if not exists Groups(
        id SERIAL PRIMARY KEY NOT NULL,
        name varchar(100) NOT NULL,
        workspace_id SERIAL,
        FOREIGN KEY (workspace_id) REFERENCES Workspaces(id)
    )`;

  await sql`create table if not exists Tasks(
        id SERIAL PRIMARY KEY NOT NULL,
        name varchar(100) NOT NULL,
        description text NOT NULL,
        date_of_creation timestamp DEFAULT NOW(),
        deadline timestamp NOT NULL,
        status varchar(100),
        group_id SERIAL,
        FOREIGN KEY (group_id) REFERENCES Groups(id)
    )`;

  await sql`create table if not exists UserWorkspace(
        id SERIAL PRIMARY KEY NOT NULL,
        user_id SERIAL NOT NULL,
        workspace_id SERIAL NOT NULL,
        FOREIGN KEY (user_id) REFERENCES Users(id),
        FOREIGN KEY (workspace_id) REFERENCES Workspaces(id)
    )`;

  //запустить в первый раз и больше не запускать
  //чтобы добавить роли в таблицу ролей

  //   await sql`insert into Roles(role) values('USER')`;
  //   await sql`insert into Roles(role) values('ADMIN')`;

  //запустить сервак
  //(прослушивать порт на запросы)
  //вторым аргументом функция которая запустится при успешном запуске сервака
  app.listen(PORT, () => {
    console.log(`СЕРВАК ФУРЫЧИТ ТУТ http://localhost:${PORT}`);
  });
};

start();
