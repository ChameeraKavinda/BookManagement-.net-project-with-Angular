using BookManagement.Model;
using BookManagement.Data;

namespace BookManagement.Data
{
    public class BookRepo : IBookRepo
    {
        private BookdbContext _dbContext;

        public BookRepo(BookdbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public Book GetBook(int id)
        {
            return _dbContext.Books.FirstOrDefault(Book => Book.Id == id);
        }

        public bool BookSave()
        {
            int count = _dbContext.SaveChanges();
            if (count > 0)
                return true;
            else
                return false;
        }

        public bool CreateBook(Book book)
        {
            if (book != null)
            {
                _dbContext.Books.Add(book);
                return BookSave();
            }
            else
            {
                return false;
            }
        }

        public bool DeleteBook(Book book)
        {
            if (book != null)
            {
                _dbContext.Books.Remove(book);
                return BookSave();
            }
            else
            {
                return false;
            }
        }

        public IEnumerable<Book> GetAllBooks()
        {
            return _dbContext.Books.ToList();
        }

        public bool UpdateBook(Book book)
        {
            _dbContext.Books.Update(book);
            return BookSave();
        }
    }
}
