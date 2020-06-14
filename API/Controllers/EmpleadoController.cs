using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Empleados;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;


namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmpleadoController : ControllerBase
    {
        private readonly IMediator _mediator;
        public EmpleadoController(IMediator mediator)
        {
            this._mediator = mediator;
           
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Empleado>>> List()
        {
           return await _mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Empleado>> Details(Guid id)
        {
           return await _mediator.Send(new Details.Query{Id=id});
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Command command)
        {
            return await _mediator.Send(command);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(Guid Id,Edit.Command command)
        {
            command.Id = Id;
             return await _mediator.Send(command);
        }


        [HttpDelete("{id}")]
        public async  Task<ActionResult<Unit>> Delete(Guid id)
        {
             return await _mediator.Send(new Delete.Command{Id = id});
        }

    }
}