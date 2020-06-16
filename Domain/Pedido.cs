using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
    public class Pedido
    {
        public Guid Id { get; set; }
        public DateTime FechaPedido { get; set; }
        [Column(TypeName = "decimal(10, 2)")]
        public decimal Total { get; set; }
        public int Estado { get; set; }

        public Guid HorarioEntregaId { get; set; }
        public HorarioEntrega HorarioEntrega { get; set; }
        public string AppUserId { get; set; }
        public virtual AppUser AppUser { get; set; }

         public virtual ICollection<DetallePedido> DetallePedido { get; set; }

    }
}