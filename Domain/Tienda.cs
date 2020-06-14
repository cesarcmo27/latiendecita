using System;
using System.Collections.Generic;

namespace Domain
{
    public class Tienda
    {
        public Guid Id { get; set; }
        public string Nombre{get;set;}
        public string Logo { get; set; }
        public byte Estado { get; set; }
        public string Direccion { get; set; }
        public decimal PosicionX { get; set; }
        public decimal PosicionY { get; set; }

        public virtual ICollection<Articulo> Articulo{get;set;} 
    }
}