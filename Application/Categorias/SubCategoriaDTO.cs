using System;

namespace Application.Categorias
{
    public class SubCategoriaDTO
    {
        public Guid Id { get; set; }
        public string Nombre { get; set; }
        public Guid CategoriaId { get; set; }

    }
}