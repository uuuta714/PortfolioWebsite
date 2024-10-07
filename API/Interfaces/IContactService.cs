using API.DTOs;
using API.Services;

namespace API.Interfaces;

public interface IContactService
{
    Task SendEmailAsync(MessageDto message, EmailType type);
}
