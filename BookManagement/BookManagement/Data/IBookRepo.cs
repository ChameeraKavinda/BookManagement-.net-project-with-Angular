using BookManagement.Model;
namespace BookManagement.Data
{
    public interface IBookRepo
    {
        bool BookSave();

        Book GetBook(int Id);

        bool CreateBook(Book book);
        bool UpdateBook(Book book);
        bool DeleteBook(Book book);

        IEnumerable<Book> GetAllBooks();
    }
}
