namespace API.Errors;

public class ApiErrorResponse(int statusCode, string exceptionMessage, string? details)
{
    public int StatusCode { get; set; } = statusCode;
    public string ExceptionMessage { get; set; } = exceptionMessage;
    public string? Details { get; set; } = details;
}