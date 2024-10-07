using System;

namespace API.Helpers;

public class EmailSettings
{
    public required string EmailHost { get; set; }
    public required int EmailPort { get; set; }
    public required string EmailUserName { get; set; }
    public required string EmailPassword { get; set; }
}
