using BookManagement.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

var conn = @"Data Source=localhost\SQLEXPRESS01;Initial Catalog=master;Integrated Security=True;Persist Security Info=False;Pooling=False;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=True;Command Timeout=0";

builder.Services.AddDbContext<BookdbContext>(option => option.UseSqlServer(conn));
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());



builder.Services.AddCors(options =>
{
    options.AddPolicy("angular",
        policy =>
        {
            
            policy.WithOrigins("http://localhost:4200", "https://localhost:4200")
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});




builder.Services.AddScoped<IBookRepo, BookRepo>();
builder.Services.AddControllers();

builder.Services.AddSwaggerGen();

var app = builder.Build();



if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();



app.UseCors("angular");

app.UseAuthorization();

app.MapControllers();

app.Run();