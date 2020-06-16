using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
    public class Tienda
    {
        public Guid Id { get; set; }
        public string Nombre { get; set; }
        public string Logo { get; set; }
        public byte Estado { get; set; }
        public string Direccion { get; set; }
        [Column(TypeName = "decimal(18, 6)")]
        public decimal PosicionX { get; set; }
        [Column(TypeName = "decimal(18, 6)")]
        public decimal PosicionY { get; set; }

        public virtual ICollection<Articulo> Articulo { get; set; }
    }
}