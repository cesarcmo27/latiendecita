using System;
using System.Collections.Generic;

namespace Domain
{
    public class Calendario
    {
        public Guid Id { get; set; }
        public DateTime Fecha { get; set; }
        public int Dia { get; set; }
        public int Mes { get; set; }
        public int Anho { get; set; }
        public virtual ICollection<HorarioEntrega> HorarioEntrega { get; set; }

    }
}