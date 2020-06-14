using System;
using System.Collections.Generic;

namespace Domain
{
    public class Categoria
    {
        public Guid Id { get; set; }
        public string Nombre { get; set; }
        public virtual ICollection<SubCategoria> SubCategoria{get;set;} 

    }
}