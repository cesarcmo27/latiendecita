using System;
using System.Collections.Generic;

namespace Domain
{
    public class SubCategoria
    {
        public Guid Id { get; set; }
         public string Nombre { get; set; }
        public Guid CategoriaId { get; set; }
        public virtual Categoria Categoria { get; set; }
         public virtual ICollection<Articulo> Articulo{get;set;} 
        
    }
}