using Examen.Modelos;
using System.Collections.Generic;
namespace Examen.Repositorios.Dapper
{
    public interface IMiembroRepositorio : IRepositorio<Member>
    {
        IEnumerable<Member> ObtenerMiembrosPaginados(int filaInicial, int filaFinal);
    }
}
