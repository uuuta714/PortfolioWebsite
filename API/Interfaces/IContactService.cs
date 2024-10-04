using API.DTOs;

namespace API.Interfaces;

public interface IContactService
{
    void SendEmail(MessageDto message);
}
