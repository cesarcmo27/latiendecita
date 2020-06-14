using System.Collections.Generic;
using MediatR;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using Persistence;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using AutoMapper;

namespace Application.Categorias
{
    public class List
    {
        public class Query : IRequest<List<CategoriaDTO>> { }

        public class Handler : IRequestHandler<Query, List<CategoriaDTO>>
        {
            private readonly DataContext _context;
              private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<List<CategoriaDTO>> Handle(Query request, CancellationToken cancellationToken)
            {
                var categorias = await _context.Categorias.Include(a => a.SubCategoria).ToListAsync();
                var newcategory = _mapper.Map<List<Categoria>,List<CategoriaDTO>>(categorias);

                return newcategory;
            }
        }
    }
}