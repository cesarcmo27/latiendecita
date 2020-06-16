using System;
using System.Collections.Generic;

namespace Domain
{
    public class HorarioEntrega
    {

        public Guid Id { get; set; }
        public Guid CalendarioId { get; set; }
        public Calendario Calendario { get; set; }

        public Guid HorarioId { get; set; }
        public Horario Horario { get; set; }

        public ICollection<Pedido> Pedido { get; set; }
    }
}