using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace Application.Categorias
{
    public class CategoriaDTO
    {
        public Guid Id { get; set; }
        public string Nombre { get; set; }
        public ICollection<SubCategoriaDTO> SubCategoria { get; set; }
    }
}