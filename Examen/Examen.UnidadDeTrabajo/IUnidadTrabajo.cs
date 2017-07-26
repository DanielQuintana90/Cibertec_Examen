using Examen.Repositorios.Dapper;

namespace Examen.UnidadDeTrabajo
{
    public interface IUnidadTrabajo
    {
        ICorporacionRepositorio Corporaciones { get; }
        IMiembroRepositorio Miembros { get; }
    }
}
