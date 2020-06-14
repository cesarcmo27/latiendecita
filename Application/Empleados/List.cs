using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Empleados
{
    public class List
    {
        public class Query : IRequest<List<Empleado>> { }

        public class Handler : IRequestHandler<Query, List<Empleado>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                this._context = context;
            }

            public async Task<List<Empleado>> Handle(Query request, CancellationToken cancellationToken)
            {
                var empleados = await _context.Empleados.ToListAsync();
                return empleados;
            }
        }
    }
}