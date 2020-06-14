using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Articulos
{
    public class List
    {
        public class Query : IRequest<List<Articulo>>
        {
            public Guid SubCategoriaId { get; set; }
        }

        public class Handler : IRequestHandler<Query, List<Articulo>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Articulo>> Handle(Query request, CancellationToken cancellationToken)
            {
                var articuloxcategoria = await _context.Articulos
                                        .Where(b => b.SubCategoriaId == request.SubCategoriaId)
                                        .ToListAsync();
                return articuloxcategoria;
            }
        }
    }
}