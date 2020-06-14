using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Categorias;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoriaController : ControllerBase
    {
         private readonly IMediator _mediator;
        public CategoriaController(IMediator mediator)
        {
            this._mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<CategoriaDTO>>> List()
        {
           return await _mediator.Send(new List.Query());
        }
    }
}