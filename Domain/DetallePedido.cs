using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
    public class DetallePedido
    {
      public Guid PedidoId { get; set; }
      public Pedido Pedido { get; set; }
      public Guid ArticuloId { get; set; }
      public Articulo Articulo { get; set; }

      public int Cantidad { get; set; }
      [Column(TypeName = "decimal(10, 2)")]
      public decimal Precio { get; set; }

    }
}