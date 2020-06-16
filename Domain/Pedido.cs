using System;
using System.Collections.Generic;

namespace Domain
{
    public class Pedido
    {
        public Guid Id { get; set; }
        public DateTime FechaPedido { get; set; }
        public Double Total { get; set; }
        public int Estado { get; set; }

        public Guid HorarioEntregaId { get; set; }
        public HorarioEntrega HorarioEntrega { get; set; }
        public string AppUserId { get; set; }
        public virtual AppUser AppUser { get; set; }

         public virtual ICollection<DetallePedido> DetallePedido { get; set; }

    }
}