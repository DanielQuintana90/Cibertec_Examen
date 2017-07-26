using Examen.UnidadDeTrabajo;
using Examen.Modelos;
using Microsoft.AspNetCore.Mvc;

namespace Examen.WebApi.Controllers
{
    [Route("corporacion")]
    public class CorporacionController : BaseController
    {
        public CorporacionController(IUnidadTrabajo unidad) : base(unidad)
        {
        }

        [HttpGet]
        public IActionResult ListarTodo()
        {
            return Ok(_unidad.Corporaciones.ListarTodo());
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult TraerPorId(int id)
        {
            return Ok(_unidad.Corporaciones.TraerPorId(id));
        }

        [HttpPost]
        public IActionResult Insertar([FromBody]Corporation corporacion)
        {
            return Ok(_unidad.Corporaciones.Insertar(corporacion));
        }

        [HttpPut]
        public IActionResult Actualizar([FromBody]Corporation corporacion)
        {
            return Ok(_unidad.Corporaciones.Actualizar(corporacion));
        }

        [HttpDelete]
        public IActionResult Eliminar([FromBody]Corporation corporacion)
        {
            return Ok(_unidad.Corporaciones.Eliminar(corporacion));
        }

        [HttpGet]
        [Route("{numeroPagina}/{cantRegistros}")]
        public IActionResult ObtenerCorporacionesPaginadas(int numeroPagina, int cantRegistros)
        {
            int filaInicial = (numeroPagina - 1) * cantRegistros + 1;
            int filaFinal = numeroPagina * cantRegistros;

            return Ok(_unidad.Corporaciones.ObtenerCorporacionesPaginadas(filaInicial, filaFinal));
        }

        [HttpGet]
        [Route("contar")]
        public IActionResult ContarRegistros()
        {
            return Ok(_unidad.Corporaciones.ContarRegistros());
        }

    }
}
