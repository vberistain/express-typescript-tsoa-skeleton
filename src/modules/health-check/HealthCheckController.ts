import { Get, Route, SuccessResponse, Tags } from "tsoa";

@Route("_health")
@Tags("health")
export class HealthCheckController {
    /**
     * Returns 200 if server is up
     */
    @Get()
    @SuccessResponse(200, "Success")
    public get(): string {
        return "OK";
    }
}
