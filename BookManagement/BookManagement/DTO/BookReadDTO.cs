using System.ComponentModel.DataAnnotations;

namespace BookManagement.DTO
{
    public class BookReadDTO
    {
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        public string Author { get; set; }
        public string Isbn { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
