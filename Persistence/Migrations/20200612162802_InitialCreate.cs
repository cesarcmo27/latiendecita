using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Categorias",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Nombre = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categorias", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Empleados",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Nombre = table.Column<string>(nullable: true),
                    Apellido = table.Column<string>(nullable: true),
                    Cargo = table.Column<string>(nullable: true),
                    CodigoId = table.Column<string>(nullable: true),
                    FechaNaciemiento = table.Column<DateTime>(nullable: false),
                    EsPlanilla = table.Column<bool>(nullable: false),
                    Edad = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Empleados", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Tiendas",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Nombre = table.Column<string>(nullable: true),
                    Logo = table.Column<string>(nullable: true),
                    Estado = table.Column<byte>(nullable: false),
                    Direccion = table.Column<string>(nullable: true),
                    PosicionX = table.Column<decimal>(nullable: false),
                    PosicionY = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tiendas", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SubCategoria",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Nombre = table.Column<string>(nullable: true),
                    CategoriaId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SubCategoria", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SubCategoria_Categorias_CategoriaId",
                        column: x => x.CategoriaId,
                        principalTable: "Categorias",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Articulos",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Nombre = table.Column<string>(nullable: true),
                    Marca = table.Column<string>(nullable: true),
                    Cantidad = table.Column<int>(nullable: false),
                    Precio = table.Column<decimal>(nullable: false),
                    Imagen = table.Column<string>(nullable: true),
                    TiendaId = table.Column<Guid>(nullable: false),
                    SubCategoriaId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Articulos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Articulos_SubCategoria_SubCategoriaId",
                        column: x => x.SubCategoriaId,
                        principalTable: "SubCategoria",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Articulos_Tiendas_TiendaId",
                        column: x => x.TiendaId,
                        principalTable: "Tiendas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Empleados",
                columns: new[] { "Id", "Apellido", "Cargo", "CodigoId", "Edad", "EsPlanilla", "FechaNaciemiento", "Nombre" },
                values: new object[] { new Guid("c8373973-7f7e-4dc9-915b-f27c377bbfac"), "Perez", "Jefe", "000", 29, true, new DateTime(2020, 10, 12, 11, 28, 1, 907, DateTimeKind.Local).AddTicks(425), "Juan" });

            migrationBuilder.InsertData(
                table: "Empleados",
                columns: new[] { "Id", "Apellido", "Cargo", "CodigoId", "Edad", "EsPlanilla", "FechaNaciemiento", "Nombre" },
                values: new object[] { new Guid("2588f7c3-9811-4830-a945-7c8b3ed966fe"), "Cueva", "Gerente", "000", 45, true, new DateTime(2020, 8, 12, 11, 28, 1, 908, DateTimeKind.Local).AddTicks(5076), "Cesar" });

            migrationBuilder.InsertData(
                table: "Empleados",
                columns: new[] { "Id", "Apellido", "Cargo", "CodigoId", "Edad", "EsPlanilla", "FechaNaciemiento", "Nombre" },
                values: new object[] { new Guid("cb09068b-425e-412d-80fe-8e8e81a85a8a"), "Mercedez", "Gerente", "000", 45, false, new DateTime(2020, 7, 12, 11, 28, 1, 908, DateTimeKind.Local).AddTicks(5135), "Maria" });

            migrationBuilder.CreateIndex(
                name: "IX_Articulos_SubCategoriaId",
                table: "Articulos",
                column: "SubCategoriaId");

            migrationBuilder.CreateIndex(
                name: "IX_Articulos_TiendaId",
                table: "Articulos",
                column: "TiendaId");

            migrationBuilder.CreateIndex(
                name: "IX_SubCategoria_CategoriaId",
                table: "SubCategoria",
                column: "CategoriaId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Articulos");

            migrationBuilder.DropTable(
                name: "Empleados");

            migrationBuilder.DropTable(
                name: "SubCategoria");

            migrationBuilder.DropTable(
                name: "Tiendas");

            migrationBuilder.DropTable(
                name: "Categorias");
        }
    }
}
