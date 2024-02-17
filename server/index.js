import express from "express";
import { sql } from "./db.js";
import { register } from "./controllers/register.js";
import { auth } from "./controllers/auth.js";
import { roleMiddleware } from "./middlewares/roleMiddleware.js";
import cors from 'cors'

//порт на котором будет работать сервер
const PORT = 3000

//сама переменная сервера
const app = express()

//чтобы сервер понимал json
app.use(express.json())
app.use(cors())

app.get('/', roleMiddleware(["ADMIN"]), async (req, res) => {
    const data = await sql`select * from Users`
    res.send(data)
})

//ветка регистрации
app.post('/reg', register)
//ветка логина
app.post('/auth', auth)


//функция старта приложения
const start = async () => {

    //создаем таблицы
    await sql`create table if not exists Roles(
        role varchar(100) unique primary key
    )`

    await sql`create table if not exists Roles_teams(
        role varchar(100) unique primary key
    )`

    await sql`create table if not exists Tasks(
        task_id SERIAL PRIMARY KEY NOT NULL,
        task_name varchar(100) NOT NULL,
        task_description varchar(100) NOT NULL,
        task_status varchar(100) NOT NULL,
        task_deadline timestamp NOT NULL,
        task_date_of_creation timestamp  DEFAULT NOW()
    )`

    await sql`create table if not exists Workspaces(
        workspace_id SERIAL PRIMARY KEY NOT NULL,
        fk_task_id INTEGER REFERENCES Tasks(task_id)
    )`

    await sql`create table if not exists Teams(
        team_id SERIAL PRIMARY KEY NOT NULL,
        team_name varchar(100) NOT NULL,
        fk_workspace_id INTEGER REFERENCES Workspaces(workspace_id)
    )`

    await sql`create table if not exists Users(
        id SERIAL PRIMARY KEY NOT NULL,
        name varchar(100) NOT NULL,
        email varchar(100),
        role varchar(100),
        password varchar(100),
        FOREIGN KEY (role) REFERENCES Roles(role)
    )`

    await sql`create table if not exists User_team(
        id_user_team SERIAL PRIMARY KEY NOT NULL,
        fk_user_id  INTEGER REFERENCES Users(id),
        fk_team_id  INTEGER REFERENCES Teams(team_id),
        fk_team_role varchar(100) REFERENCES Roles_teams(role)
    )`

    //запустить в первый раз и больше не запускать
    //чтобы добавить роли в таблицу ролей

    // await sql`insert into Roles(role) values('USER')`
    // await sql`insert into Roles(role) values('ADMIN')`

    // await sql`insert into Roles_teams(role) values('USER')`
    // await sql`insert into Roles_teams(role) values('ADMIN')`

    //запустить сервак
    //(прослушивать порт на запросы)
    //вторым аргументом функция которая запустится при успешном запуске сервака
    app.listen(PORT, () => {
        console.log(`СЕРВАК ФУРЫЧИТ ТУТ http://localhost:${PORT}`);
    })
}

start()