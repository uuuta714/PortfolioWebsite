using API.Helpers;
using API.Interfaces;
using API.Middleware;
using API.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.Configure<EmailSettings>(
    builder.Configuration.GetSection("EmailSettings")
);
builder.Services.AddScoped<IContactService, ContactService>();
builder.Services.AddControllers();
builder.Services.AddCors();
builder.Services.AddTransient<ExceptionMiddleware>();

var app = builder.Build();

// Configure the HTTP request pipeline (Middleware Pipeline).
app.UseMiddleware<ExceptionMiddleware>();
app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod()
    .WithOrigins("http://localhost:4200", "https://localhost:4200"));

// Serve angular client project as static files
app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
app.MapControllers();
app.MapFallbackToController("Index", "Fallback");

app.Run();
