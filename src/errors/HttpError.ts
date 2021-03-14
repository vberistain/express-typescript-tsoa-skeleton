import HttpStatus from "http-status-codes";

export default class HttpError extends Error {
    public message: string;
    public statusCode: number;
    public code?: string;
    public name: string;
    constructor(statusCode: number, message: string, code?: string) {
        message = message || HttpStatus.getStatusText(statusCode);

        super(message);

        this.message = message;
        this.statusCode = statusCode;
        this.name = this.constructor.name;
        this.code = code;
    }
}
