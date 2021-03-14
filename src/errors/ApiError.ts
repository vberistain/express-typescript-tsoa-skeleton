// Limitation of tsoa library to incluse types depending of external library
// export type APIError = Pick<HttpError, "message" | "statusCode">;
export type ApiError = {
    message: string;
    statusCode: string;
};
