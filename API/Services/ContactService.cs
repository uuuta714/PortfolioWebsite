using API.DTOs;
using API.Helpers;
using API.Interfaces;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Options;
using MimeKit;
using MimeKit.Text;

namespace API.Services;

public class ContactService(IOptions<EmailSettings> emailSettings) : IContactService
{
    private readonly EmailSettings _emailSettings = emailSettings.Value;

    public void SendEmail(MessageDto message)
    {
        var host = _emailSettings.EmailHost;
        var userName = _emailSettings.EmailUserName;
        var password = _emailSettings.EmailPassword;

        // Sending a message to myself for a notification
        var notification = new MimeMessage();
            notification.From.Add(MailboxAddress.Parse(userName));
            notification.To.Add(MailboxAddress.Parse(userName));
            notification.Subject = "You have received a new message from " + message.Name;
            notification.Body = new TextPart(TextFormat.Html) {
                Text = "<div>From: " + message.Email + "</div>" +
                        "<div>Subject: " + message.Subject + "</div>" +
                        "<div>Message: " + message.Message  + "</div>"};

            using var smtp = new SmtpClient();
            smtp.Connect(host, 587, SecureSocketOptions.StartTls);
            smtp.Authenticate(userName, password);
            smtp.Send(notification);
            smtp.Disconnect(true);
    }
}
