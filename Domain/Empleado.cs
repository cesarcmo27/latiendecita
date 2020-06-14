using System;

namespace Domain
{
    public class Empleado
    {
        public Guid Id {get;set;}
        public string Nombre {get;set;}   
        public string Apellido {get;set;}   
        public string Cargo { get; set; }
        public string CodigoId { get; set; }
        public DateTime FechaNaciemiento {get;set;}
        public bool EsPlanilla {get;set;}
        public int Edad { get; set; }
    }
}