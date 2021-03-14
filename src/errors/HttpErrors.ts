import HttpStatus from "http-status-codes";
import HttpError from "./HttpError";

export default {
    BadGatewayError: class BadGatewayError extends HttpError {
        constructor(message: string, ...rest: any[]) {
            super(HttpStatus.BAD_GATEWAY, message, ...rest);
        }
    },

    BadRequestError: class BadRequestError extends HttpError {
        constructor(message: string, ...rest: any[]) {
            super(HttpStatus.BAD_REQUEST, message, ...rest);
        }
    },

    ConflictError: class ConflictError extends HttpError {
        constructor(message: string, ...rest: any[]) {
            super(HttpStatus.CONFLICT, message, ...rest);
        }
    },

    ExpectationFailedError: class ExpectationFailedError extends HttpError {
        constructor(message: string, ...rest: any[]) {
            super(HttpStatus.EXPECTATION_FAILED, message, ...rest);
        }
    },

    ForbiddenError: class ForbiddenError extends HttpError {
        constructor(message: string, ...rest: any[]) {
            super(HttpStatus.FORBIDDEN, message, ...rest);
        }
    },

    GatewayTimeoutError: class GatewayTimeoutError extends HttpError {
        constructor(message: string, ...rest: any[]) {
            super(HttpStatus.GATEWAY_TIMEOUT, message, ...rest);
        }
    },

    GoneError: class GoneError extends HttpError {
        constructor(message: string, ...rest: any[]) {
            super(HttpStatus.GONE, message, ...rest);
        }
    },

    HttpVersionNotSupportedError: class HttpVersionNotSupportedError extends HttpError {
        constructor(message: string, ...rest: any[]) {
            super(HttpStatus.HTTP_VERSION_NOT_SUPPORTED, message, ...rest);
        }
    },

    InsufficientSpaceOnResourceError: class InsufficientSpaceOnResourceError extends HttpError {
        constructor(message: string, ...rest: any[]) {
            super(HttpStatus.INSUFFICIENT_SPACE_ON_RESOURCE, message, ...rest);
        }
    },

    InsufficientStorageError: class InsufficientStorageError extends HttpError {
        constructor(message: string, ...rest: any[]) {
            super(HttpStatus.INSUFFICIENT_STORAGE, message, ...rest);
        }
    },

    InternalServerError: class InternalServerError extends HttpError {
        constructor(message: string, ...rest: any[]) {
            super(HttpStatus.INTERNAL_SERVER_ERROR, message, ...rest);
        }
    },

    LengthRequiredError: class LengthRequiredError extends HttpError {
        constructor(message: string, ...rest: any[]) {
            super(HttpStatus.LENGTH_REQUIRED, message, ...rest);
        }
    },

    LockedError: class LockedError extends HttpError {
        constructor(message: string, ...rest: any[]) {
            super(HttpStatus.LOCKED, message, ...rest);
        }
    },

    MethodFailureError: class MethodFailureError extends HttpError {
        constructor(message: string, ...rest: any[]) {
            super(HttpStatus.METHOD_FAILURE, message, ...rest);
        }
    },

    MethodNotAllowedError: class MethodNotAllowedError extends HttpError {
        constructor(message: string, ...rest: any[]) {
            super(HttpStatus.METHOD_NOT_ALLOWED, message, ...rest);
        }
    },

    NetworkAuthenticationRequiredError: class NetworkAuthenticationRequiredError extends HttpError {
        constructor(message: string, ...rest: any[]) {
            super(HttpStatus.NETWORK_AUTHENTICATION_REQUIRED, message, ...rest);
        }
    },

    NotAcceptableError: class NotAcceptableError extends HttpError {
        constructor(message: string, ...rest: any[]) {
            super(HttpStatus.NOT_ACCEPTABLE, message, ...rest);
        }
    },

    NotFoundError: class NotFoundError extends HttpError {
        constructor(message: string, ...rest: any[]) {
            super(HttpStatus.NOT_FOUND, message, ...rest);
        }
    },

    NotImplementedError: class NotImplementedError extends HttpError {
        constructor(message: string, ...rest: any[]) {
            super(HttpStatus.NOT_IMPLEMENTED, message, ...rest);
        }
    },

    PaymentRequiredError: class PaymentRequiredError extends HttpError {
        constructor(message: string, ...rest: any[]) {
            super(HttpStatus.PAYMENT_REQUIRED, message, ...rest);
        }
    },

    PreconditionFailedError: class PreconditionFailedError extends HttpError {
        constructor(message: string, ...rest: any[]) {
            super(HttpStatus.PRECONDITION_FAILED, message, ...rest);
        }
    },

    PreconditionRequiredError: class PreconditionRequiredError extends HttpError {
        constructor(message: string, ...rest: any[]) {
            super(HttpStatus.PRECONDITION_REQUIRED, message, ...rest);
        }
    },

    ProxyAuthenticationRequiredError: class ProxyAuthenticationRequiredError extends HttpError {
        constructor(message: string, ...rest: any[]) {
            super(HttpStatus.PROXY_AUTHENTICATION_REQUIRED, message, ...rest);
        }
    },

    RequestHeaderFieldsTooLargeError: class RequestHeaderFieldsTooLargeError extends HttpError {
        constructor(message: string, ...rest: any[]) {
            super(HttpStatus.REQUEST_HEADER_FIELDS_TOO_LARGE, message, ...rest);
        }
    },

    RequestTimeoutError: class RequestTimeoutError extends HttpError {
        constructor(message: string, ...rest: any[]) {
            super(HttpStatus.REQUEST_TIMEOUT, message, ...rest);
        }
    },

    RequestTooLongError: class RequestTooLongError extends HttpError {
        constructor(message: string, ...rest: any[]) {
            super(HttpStatus.REQUEST_TOO_LONG, message, ...rest);
        }
    },

    RequestUriTooLongError: class RequestUriTooLongError extends HttpError {
        constructor(message: string, ...rest: any[]) {
            super(HttpStatus.REQUEST_URI_TOO_LONG, message, ...rest);
        }
    },

    RequestedRangeNotSatisfiableError: class RequestedRangeNotSatisfiableError extends HttpError {
        constructor(message: string, ...rest: any[]) {
            super(HttpStatus.REQUESTED_RANGE_NOT_SATISFIABLE, message, ...rest);
        }
    },

    ServiceUnavailableError: class ServiceUnavailableError extends HttpError {
        constructor(message: string, ...rest: any[]) {
            super(HttpStatus.SERVICE_UNAVAILABLE, message, ...rest);
        }
    },

    TooManyRequestsError: class TooManyRequestsError extends HttpError {
        constructor(message: string, ...rest: any[]) {
            super(HttpStatus.TOO_MANY_REQUESTS, message, ...rest);
        }
    },

    UnauthorizedError: class UnauthorizedError extends HttpError {
        constructor(message: string, ...rest: any[]) {
            super(HttpStatus.UNAUTHORIZED, message, ...rest);
        }
    },

    UnprocessableEntityError: class UnprocessableEntityError extends HttpError {
        constructor(message: string, ...rest: any[]) {
            super(HttpStatus.UNPROCESSABLE_ENTITY, message, ...rest);
        }
    },

    UnsupportedMediaTypeError: class UnsupportedMediaTypeError extends HttpError {
        constructor(message: string, ...rest: any[]) {
            super(HttpStatus.UNSUPPORTED_MEDIA_TYPE, message, ...rest);
        }
    },
};
