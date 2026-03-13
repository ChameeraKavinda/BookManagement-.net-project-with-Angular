using AutoMapper;
using BookManagement.Data;
using BookManagement.DTO;
using BookManagement.Model;
using Microsoft.AspNetCore.Mvc;

namespace BookManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : Controller
    {
        private readonly IMapper _mapper;
        private readonly IBookRepo _bookRepo;

        public BookController(IMapper mapper, IBookRepo bookRepo)
        {
            _mapper = mapper;
            _bookRepo = bookRepo;
        }
        [HttpPost]
        public ActionResult CreateBook(BookCreateDTO createDTO)
        {
            var model = _mapper.Map<Book>(createDTO);
            if (_bookRepo.CreateBook(model))
                return Ok();
            else
                return BadRequest();
        }

       

        [HttpGet]
        public ActionResult<IEnumerable<BookReadDTO>> GetBook()
        {
            var books = _bookRepo.GetAllBooks();
            return Ok(_mapper.Map<IEnumerable<BookReadDTO>>(books));
        }

        [HttpPut("{id}")]
        public ActionResult UpdateBook(int id, BookCreateDTO bookUpdate)
        {
            var book = _mapper.Map<Book>(bookUpdate);
           book.Id = id;
            if (_bookRepo.UpdateBook(book))
                return Ok();
            else
                return NotFound();
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteBook(int id)
        {
            var book = _bookRepo.GetBook(id);
            if (_bookRepo.DeleteBook(book))
                return Ok();
            else
                return NotFound();
        }

        [HttpGet("{id}", Name = "GetByBookId")]
        public ActionResult<BookReadDTO> GetBook(int id)
        {
            var book = _bookRepo.GetBook(id);
            if (book != null)
            {
                return Ok(_mapper.Map<BookReadDTO>(book));
            }
            else
            {
                return NotFound();
            }
        }
    }
}