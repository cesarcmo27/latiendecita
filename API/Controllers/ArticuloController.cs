using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Articulos;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ArticuloController : ControllerBase
    {
        private readonly IMediator _mediator;

        public ArticuloController(IMediator mediator)
        {
            this._mediator = mediator;
           
        }

        // [HttpGet("{categoriaid}")]
       /* public async Task<ActionResult<IEnumerable<Articulo>>> ArticuloPorCategoria(Guid categoriaid)
        {
           return await _mediator.Send(new List.Query{CategoriaId = categoriaid});
        }*/
    }
}