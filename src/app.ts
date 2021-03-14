"use strict";

import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { RegisterRoutes } from "../dist/routes";
import swaggerUi from "swagger-ui-express";

import bodyParser from "body-parser";
import errorMiddleware from "@errors/ErrorMiddleware";
import HttpError from "@errors/HttpError";

let app: express.Application = express();

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());

app.use("/docs", swaggerUi.serve, async (req: Request, res: Response) => {
    try {
        //@TODO: Check if importing the swagger file is mandatory
        res.send(swaggerUi.generateHTML(await import("../dist/swagger.json")));
    } catch (error) {
        console.log(error);
    }
});

RegisterRoutes(app);

app.use(cors);

app.use(errorMiddleware);
app.use((error: HttpError, req: Request, res: Response, next: NextFunction) => {
    res.status(error.statusCode).send({
        code: error.code,
        message: error.message,
    });

    if (process.env.NODE_ENV === "development") {
        console.error(error);
    }
});

export default app;
