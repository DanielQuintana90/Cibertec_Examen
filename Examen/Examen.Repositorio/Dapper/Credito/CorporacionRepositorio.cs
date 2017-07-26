using Dapper;
using Examen.Modelos;
using System.Collections.Generic;
using System.Data.SqlClient;
namespace Examen.Repositorios.Dapper.Credito
{
    public class CorporacionRepositorio : Repositorio<Corporation>, ICorporacionRepositorio
    {
        public CorporacionRepositorio(string connectionString) : base(connectionString)
        {

        }

        public IEnumerable<Corporation> ObtenerCorporacionesPaginadas(int filaInicial, int filaFinal)
        {
            using (var conexion = new SqlConnection(_cadenaDeConexion))
            {
                var parametros = new DynamicParameters();
                parametros.Add("@filaInicial", filaInicial);
                parametros.Add("@filaFinal", filaFinal);

                return conexion.Query<Corporation>("dbo.ListaPaginadaDeCorporaciones",
                    parametros,
                    commandType: System.Data.CommandType.StoredProcedure);
            }
        }

    }
}
