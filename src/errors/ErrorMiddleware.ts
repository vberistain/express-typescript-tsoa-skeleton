import { NextFunction, Request, Response } from "express";
import { CustomError } from "./CustomError";
import HttpErrors from "./HttpErrors";

export default function errorMiddleware(
    error: CustomError & Error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    switch (error.constructor) {
        default:
            return next(
                new HttpErrors.InternalServerError(error.message, error.code)
            );
    }
}
