using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
    public class Articulo
    {
        public Guid Id { get; set; }
        public string Nombre { get; set; }
        public string Marca { get; set; }
        public int  Cantidad { get; set; }
        [Column(TypeName = "decimal(10, 2)")]
        public decimal Precio { get; set; }
        public string Imagen { get; set; }
        public Guid TiendaId { get; set; }
        public virtual Tienda Tienda { get; set; }
        public Guid SubCategoriaId { get; set; }
        public virtual SubCategoria SubCategoria { get; set; }

        public virtual ICollection<DetallePedido> DetallePedido { get; set; }

    }
}