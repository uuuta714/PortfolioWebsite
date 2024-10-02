using API.DTOs;
using API.Helpers;
using API.Interfaces;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Options;
using MimeKit;
using MimeKit.Text;

namespace API.Services;

public class EmailService(IOptions<EmailSettings> emailSettings) : IEmailService
{
    private readonly EmailSettings _emailSettings = emailSettings.Value;

    public void SendEmail(EmailDto request)
    {
        var host = _emailSettings.EmailHost;
        var userName = _emailSettings.EmailUserName;
        var password = _emailSettings.EmailPassword;


        var email = new MimeMessage();
            email.From.Add(MailboxAddress.Parse(userName));
            email.To.Add(MailboxAddress.Parse(request.RecipientAddress));
            email.Subject = request.Subject;
            email.Body = new TextPart(TextFormat.Html) {Text = request.Message};

            using var smtp = new SmtpClient();
            smtp.Connect(host, 587, SecureSocketOptions.StartTls);
            smtp.Authenticate(userName, password);
            smtp.Send(email);
            smtp.Disconnect(true);
    }
}
