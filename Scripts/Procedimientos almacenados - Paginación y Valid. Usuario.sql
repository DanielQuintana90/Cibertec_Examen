-- Procedimientos almacenados - Examen Cibertec

create procedure ListaPaginadaDeCorporaciones
@filaInicial int,
@filaFinal int
as
begin
	SELECT  
		[corp_no]
		,[corp_name]
		,[street]
		,[city]
		,[state_prov]
		,[country]
		,[mail_code]
		,[phone_no]
		,[expr_dt]
		,[corp_code]
	FROM    ( SELECT    ROW_NUMBER() OVER ( ORDER BY [corp_no] ) AS RowNum,
				[corp_no]
				,[corp_name]
				,[street]
				,[city]
				,[state_prov]
				,[country]
				,[mail_code]
				,[phone_no]
				,[expr_dt]
				,[corp_code]
			  FROM     [dbo].[corporation]          
			) AS RowConstrainedResult
	WHERE   RowNum >= @filaInicial
		AND RowNum <= @filaFinal
	ORDER BY RowNum
end
go

create procedure ListaPaginadaDeMiembros
@filaInicial int,
@filaFinal int
as
begin
	SELECT  
		[member_no]
		,[lastname]
		,[firstname]
		,[middleinitial]
		,[street]
		,[city]
		,[state_prov]
		,[country]
		,[mail_code]
		,[phone_no]
		,[issue_dt]
		,[expr_dt]
		,[corp_no]
		,[prev_balance]
		,[curr_balance]
		,[member_code]
	FROM    ( SELECT    ROW_NUMBER() OVER ( ORDER BY [member_no] ) AS RowNum,
		[member_no]
		,[lastname]
		,[firstname]
		,[middleinitial]
		,[street]
		,[city]
		,[state_prov]
		,[country]
		,[mail_code]
		,[phone_no]
		,[issue_dt]
		,[expr_dt]
		,[corp_no]
		,[prev_balance]
		,[curr_balance]
		,[member_code]
			  FROM     [dbo].[member]          
			) AS RowConstrainedResult
	WHERE   RowNum >= @filaInicial
		AND RowNum <= @filaFinal
	ORDER BY RowNum
end
go

create procedure ValidarUsuario
@email varchar(100),
@contrasena varchar(100)
as
begin
	select *
	from dbo.Usuario
	where  Email = @email and Contrasena = @contrasena
end
go

insert into dbo.Usuario values ('daniel@quintana.com','Daniel','Quintana','Bedoya','prueba',NULL)
go