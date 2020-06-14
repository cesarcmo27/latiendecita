using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Empleados
{
    public class Details
    {
        public class Query : IRequest<Empleado>
        {

            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Empleado>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Empleado> Handle(Query request, CancellationToken cancellationToken)
            {
               var empleado = await _context.Empleados.FindAsync(request.Id);
               return empleado;
            }
        }


    }
}