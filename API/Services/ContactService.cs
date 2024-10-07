using API.DTOs;
using API.Helpers;
using API.Interfaces;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Options;
using MimeKit;
using MimeKit.Text;

namespace API.Services;

public enum EmailType
{
    Notification,
    AutoReply
}

public class ContactService(IOptions<EmailSettings> emailSettings) : IContactService
{
    private readonly EmailSettings _emailSettings = emailSettings.Value;

    public async Task SendEmailAsync(MessageDto message, EmailType type)
    {
        var host = _emailSettings.EmailHost;
        var port = _emailSettings.EmailPort;
        var userName = _emailSettings.EmailUserName;
        var password = _emailSettings.EmailPassword;

        var email = new MimeMessage();
            email.From.Add(MailboxAddress.Parse(userName));

        if (type == EmailType.Notification)
        {
            email.To.Add(MailboxAddress.Parse(userName));
            email.Subject = "You have received a new message from " + message.Name;
            email.Body = new TextPart(TextFormat.Html) {
                Text = "<div>From: " + message.Email + "</div>" +
                        "<div>Subject: " + message.Subject + "</div>" +
                        "<div>Message: " + message.Message  + "</div>"
            };
        }
        else if (type == EmailType.AutoReply)
        {
            email.To.Add(MailboxAddress.Parse(message.Email));
            email.Subject = "Automatic reply: " + message.Subject;
            email.Body = new TextPart(TextFormat.Html) {
                Text = "<div>Dear " + message.Name + ",</div>" +
                        "<br>" +
                        "<div>Thank you for visiting my portfolio website. " + 
                        "I have received your message and will get back to you shortly.</div>" + 
                        "<br>" +
                        "<div>Best regards,</div>" +
                        "<div>Yuta Horiuchi</div>"
            };
        }

        using var smtp = new SmtpClient();
        await smtp.ConnectAsync(host, port, SecureSocketOptions.StartTls);
        await smtp.AuthenticateAsync(userName, password);
        await smtp.SendAsync(email);
        await smtp.DisconnectAsync(true);
    }
}
