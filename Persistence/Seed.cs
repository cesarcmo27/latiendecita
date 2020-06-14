using System;
using System.Collections.Generic;
using System.Linq;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static void SeedData(DataContext context)
        {
            if (!context.Empleados.Any())
            {
                var empleados = new List<Empleado> {
                    new Empleado { Id = Guid.NewGuid (), Nombre = "Juan", Apellido = "Perez", Cargo = "Jefe", CodigoId = "000", FechaNaciemiento = DateTime.Now.AddMonths (4), EsPlanilla = true, Edad = 29 },
                    new Empleado { Id = Guid.NewGuid (), Nombre = "Cesar", Apellido = "Cueva", Cargo = "Gerente", CodigoId = "000", FechaNaciemiento = DateTime.Now.AddMonths (2), EsPlanilla = true, Edad = 45 },
                    new Empleado { Id = Guid.NewGuid (), Nombre = "Maria", Apellido = "Mercedez", Cargo = "Gerente", CodigoId = "000", FechaNaciemiento = DateTime.Now.AddMonths (1), EsPlanilla = false, Edad = 45 }
                };
                context.Empleados.AddRange(empleados);
            }

            if (!context.Tiendas.Any())
            {
                //TIENDAS
                var tiendas = new List<Tienda>{
                    new Tienda {Id = Guid.NewGuid (),Nombre = "Bodega Jesus Maria",Logo="",Estado = 1,Direccion="sudir" ,PosicionX=0.0m,PosicionY=0.0m}
                };
                context.Tiendas.AddRange(tiendas);
                //CATEGORIAS
                var categorias = new List<Categoria>{
                    new Categoria {Id = Guid.NewGuid (),Nombre="LACTEOS"},
                    new Categoria {Id = Guid.NewGuid (),Nombre="BEBIDAS CERVEZAS"},
                    new Categoria {Id = Guid.NewGuid (),Nombre="CUIDADO PERSONAL"},
                    new Categoria {Id = Guid.NewGuid (),Nombre="FRUTAS Y VERDURAS"}
                };
                context.Categorias.AddRange(categorias);
                //subcategorias
                var subcategorias = new List<SubCategoria>{
                     //LACTEOS
                    new SubCategoria {Id= Guid.NewGuid (),Nombre="Leche",CategoriaId=categorias[0].Id},
                    new SubCategoria {Id= Guid.NewGuid (),Nombre="Mantequilla y Margarina",CategoriaId=categorias[0].Id},
                    //BEBIDAS Y CERVEZAS
                     new SubCategoria {Id= Guid.NewGuid (),Nombre="Jugos",CategoriaId=categorias[1].Id},
                     new SubCategoria {Id= Guid.NewGuid (),Nombre="Gaseosas",CategoriaId=categorias[1].Id},
                     new SubCategoria {Id= Guid.NewGuid (),Nombre="Cervezas",CategoriaId=categorias[1].Id},
                     //CUIDADO PERSONAL
                     new SubCategoria {Id= Guid.NewGuid (),Nombre="Cuidado Bucal",CategoriaId=categorias[2].Id},

                };

                context.SubCategoria.AddRange(subcategorias);

                //ARTICULOS
                var articulos = new List<Articulo>{
                    new Articulo {Id = Guid.NewGuid (),
                                  Nombre="Leche Evaporada GLORIA Azul Lata 400g",
                                  Marca="GLORIA",
                                  Cantidad=5,
                                  Precio= 7.4m,
                                  Imagen = "gloria.webp",
                                  TiendaId = tiendas[0].Id,
                                  SubCategoriaId = subcategorias[0].Id
                                   },
                     new Articulo {Id = Guid.NewGuid (),
                                  Nombre="Queso Cheddar LAIVE Paquete 170g",
                                  Marca="LAIVE",
                                  Cantidad=10,
                                  Precio= 9.0m,
                                  Imagen = "QuesoCheddar.webp",
                                  TiendaId = tiendas[0].Id,
                                  SubCategoriaId = subcategorias[1].Id
                                   },

                    new Articulo {Id = Guid.NewGuid (),
                                  Nombre="Bebida de Almendras LAIVE Caja 1L",
                                  Marca="LAIVE",
                                  Cantidad=10,
                                  Precio= 9.0m,
                                  Imagen = "imagen.webp",
                                  TiendaId = tiendas[0].Id,
                                  SubCategoriaId = subcategorias[2].Id
                                   },
                    new Articulo {Id = Guid.NewGuid (),
                                  Nombre="Leche Chocolatada UHT GLORIA Paquete 6un Caja 180ml",
                                  Marca="GLORIA",
                                  Cantidad=10,
                                  Precio= 9.0m,
                                  Imagen = "imagen.webp",
                                  TiendaId = tiendas[0].Id,
                                  SubCategoriaId = subcategorias[0].Id
                                   },
                      new Articulo {Id = Guid.NewGuid (),
                                  Nombre="INKA KOLA DE 1 LT",
                                  Marca="COCACOLA",
                                  Cantidad=40,
                                  Precio= 4.5M,
                                  Imagen = "imagen.webp",
                                  TiendaId = tiendas[0].Id,
                                  SubCategoriaId = subcategorias[3].Id
                                   },
                     new Articulo {Id = Guid.NewGuid (),
                                  Nombre="Bebida Energizante MONSTER Energy Lata 473ml",
                                  Marca="MONSTER",
                                  Cantidad=40,
                                  Precio= 4.5M,
                                  Imagen = "imagen.webp",
                                  TiendaId = tiendas[0].Id,
                                  SubCategoriaId = subcategorias[3].Id
                                   },
                      new Articulo {Id = Guid.NewGuid (),
                                  Nombre="Crema Dental COLGATE Triple Protección Tubo 60ml Caja 6un",
                                  Marca="COLGATE",
                                  Cantidad=40,
                                  Precio= 4.5M,
                                  Imagen = "imagen.webp",
                                  TiendaId = tiendas[0].Id,
                                  SubCategoriaId = subcategorias[3].Id
                                   },
                };
                context.Articulos.AddRange(articulos);

            }


            context.SaveChanges();
        }
    }

}