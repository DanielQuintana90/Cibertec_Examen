using Examen.Modelos;
using System.Collections.Generic;

namespace Examen.Repositorios.Dapper
{
    public interface ICorporacionRepositorio : IRepositorio<Corporation>
    {
        IEnumerable<Corporation> ObtenerCorporacionesPaginadas(int filaInicial, int filaFinal);        
    }
}
