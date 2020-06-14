using System;

namespace Domain
{
    public class Articulo
    {
        public Guid Id { get; set; }
        public string Nombre { get; set; }
        public string Marca { get; set; }
        public int  Cantidad { get; set; }
        public decimal Precio { get; set; }
        public string Imagen { get; set; }
        public Guid TiendaId { get; set; }
        public virtual Tienda Tienda { get; set; }
        public Guid SubCategoriaId { get; set; }
        public virtual SubCategoria SubCategoria { get; set; }

    }
}