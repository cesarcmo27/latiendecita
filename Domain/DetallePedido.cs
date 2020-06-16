using System;

namespace Domain
{
    public class DetallePedido
    {
      public Guid PedidoId { get; set; }
      public Pedido Pedido { get; set; }
      public Guid ArticuloId { get; set; }
      public Articulo Articulo { get; set; }

      public int Cantidad { get; set; }
      public Double Precio { get; set; }

    }
}