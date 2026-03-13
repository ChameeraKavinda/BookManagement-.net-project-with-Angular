using   Microsoft.EntityFrameworkCore;
using BookManagement.Model;

namespace BookManagement.Data

{
    public class BookdbContext : DbContext
    {
        public BookdbContext(DbContextOptions<BookdbContext> options) : base(options)
        {
        }
        public DbSet<Book> Books { get; set; }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {


            modelBuilder.Entity<Book>();
           








        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
           


            var conn = @"Data Source=localhost\SQLEXPRESS01;Initial Catalog=master;Integrated Security=True;Persist Security Info=False;Pooling=False;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=True;Command Timeout=0";
            optionsBuilder.UseSqlServer(conn);
        }

    }

}
