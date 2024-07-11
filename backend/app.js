import express from "express";
import {config} from 'dotenv';

import cors from "cors";
import {dbConnection} from "./database/dbConnection.js";
import studentRouter from "./router/studentRouter.js";
import teacherRouter from "./router/teacherRouter.js";
import assignmentRouter from "./router/assignmentRouter.js";
import announcementRouter from "./router/announcementRouter.js";
import classRouter from "./router/classRouter.js";
import libraryRouter from "./router/libraryRouter.js";
import eventsRouter from "./router/eventsRouter.js";
import examRouter from "./router/examRouter.js";
import attendanceRouter from "./router/attendanceRouter.js";


import  { errorHandler } from "./middlewares/errorHandler.js";


const app = express();
config({path: "./config/config.env"});

app.use( 
  cors({
      origin: [process.env.FRONTEND_URL],
      methods: ["GET", "POST", "PUT", "DELETE"], 
  
  }) 
);

app.use((err, req, res, next) => {
    errorHandler(err, req, res, next);
  });

  app.use(express.json());
  app.use(express.urlencoded({extended: true}));

  app.use("/api/v1/students", studentRouter);


 dbConnection();
export default app;
