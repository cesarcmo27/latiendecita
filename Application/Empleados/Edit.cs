using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Empleados
{
    public class Edit
    {
        public class Command : IRequest
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

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;

            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                
                var empleado = await _context.Empleados.FindAsync(request.Id);
                if (empleado == null)
                    throw new Exception("No se encontro actividad");

                empleado.Nombre = request.Nombre ?? empleado.Nombre;
                empleado.Apellido = request.Apellido ?? empleado.Apellido;
                empleado.Cargo = request.Cargo ?? empleado.Cargo;
                empleado.Edad = request.Edad ;
                empleado.EsPlanilla = request.EsPlanilla;
                empleado.FechaNaciemiento = request.FechaNaciemiento;
                try{
                     var success = await _context.SaveChangesAsync() > 0;
                     
                       if (success) return Unit.Value;

                        throw new Exception("error al actualizar:"+success.ToString());
                }
                catch(Exception e) {
                    throw e;
                }
               
              

            }
        }
    }
}