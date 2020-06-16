using System;
using System.Collections.Generic;

namespace Domain
{
    public class Horario
    {
        public Guid Id { get; set; }
        public string HoraEntrega { get; set; }

         public virtual ICollection<HorarioEntrega> HorarioEntrega { get; set; }
    }
}