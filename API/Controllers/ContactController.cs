using API.DTOs;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController(IContactService contactService) : ControllerBase
    {
        private readonly IContactService _contactService = contactService;

        [HttpPost]
        public async Task<IActionResult> SendEmailAsync(MessageDto message)
        {
            await _contactService.SendEmailAsync(message, Services.EmailType.Notification);
            await _contactService.SendEmailAsync(message, Services.EmailType.AutoReply);
            return Ok();
        }
    }
}
