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
        public IActionResult SendEmail(MessageDto message)
        {
            _contactService.SendEmail(message);
            return Ok();
        }
    }
}
