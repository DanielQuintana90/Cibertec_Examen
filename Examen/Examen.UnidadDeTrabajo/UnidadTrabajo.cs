using Examen.Repositorios.Dapper;
using Examen.Repositorios.Dapper.Credito;

namespace Examen.UnidadDeTrabajo
{
    public class UnidadTrabajo : IUnidadTrabajo
    {
        public UnidadTrabajo(string cadenaConexion)
        {
            Corporaciones = new CorporacionRepositorio(cadenaConexion);
            Miembros = new MiembroRepositorio(cadenaConexion);
        }

        public ICorporacionRepositorio Corporaciones { get; private set; }
        public IMiembroRepositorio Miembros { get; private set; }

    }
}
