using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Empleados
{
    public class Create
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public string Nombre { get; set; }
            public string Cargo { get; set; }
            public string CodigoId { get; set; }
            public int Edad { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x=>x.Nombre).NotEmpty();
                RuleFor(x=>x.Cargo).NotEmpty();
                RuleFor(x=>x.Edad).NotEmpty();
            }
        }
        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request,
                                     CancellationToken cancellationToken)
            {
               var empleado = new Empleado{
                   Id = request.Id,
                   Nombre = request.Nombre,
                   Cargo = request.Cargo,
                   CodigoId = request.CodigoId,
                   Edad = request.Edad

               };

               _context.Empleados.Add(empleado);
                var success = await _context.SaveChangesAsync() > 0; //si e smayo inserto correcto
                if(success)
                    return Unit.Value;

                throw new Exception("problema al insertar");    
               
            }
        }

    }
}