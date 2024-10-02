namespace API.DTOs;

public class EmailDto
{
    public string RecipientName { get; set; } = string.Empty;
    public string RecipientAddress { get; set; } = string.Empty;
    public string Subject { get; set; } = string.Empty;
    public string Message { get; set; } = string.Empty;
}
