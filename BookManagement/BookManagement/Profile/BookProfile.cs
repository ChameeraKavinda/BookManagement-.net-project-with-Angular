using BookManagement.DTO;
using BookManagement.Model;

namespace BookManagement.Profile
{
    public class BookProfile : AutoMapper.Profile
    {
        public BookProfile()
        {
            CreateMap<Book, BookReadDTO>();
            CreateMap<BookCreateDTO, Book>();
        }
    }
}
