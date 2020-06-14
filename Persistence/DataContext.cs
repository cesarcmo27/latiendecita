using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Empleado> Empleados { get; set; }
        public DbSet<Articulo> Articulos { get; set; }
        public DbSet<Tienda> Tiendas { get; set; }
        public DbSet<Categoria> Categorias { get; set; }
         public DbSet<SubCategoria> SubCategoria { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Empleado>()
            .HasData(
                new Empleado { Id = Guid.NewGuid(), Nombre = "Juan", Apellido = "Perez", Cargo = "Jefe", CodigoId = "000", FechaNaciemiento = DateTime.Now.AddMonths(4), EsPlanilla = true, Edad = 29 },
                new Empleado { Id = Guid.NewGuid(), Nombre = "Cesar", Apellido = "Cueva", Cargo = "Gerente", CodigoId = "000", FechaNaciemiento = DateTime.Now.AddMonths(2), EsPlanilla = true, Edad = 45 },
                new Empleado { Id = Guid.NewGuid(), Nombre = "Maria", Apellido = "Mercedez", Cargo = "Gerente", CodigoId = "000", FechaNaciemiento = DateTime.Now.AddMonths(1), EsPlanilla = false, Edad = 45 }
            );
            builder.Entity<Categoria>();
            

            builder.Entity<SubCategoria>()
              .HasOne(u => u.Categoria)
            .WithMany(a => a.SubCategoria)
            .HasForeignKey(b => b.CategoriaId);
           ;

          builder.Entity<Articulo>()
            .HasOne(u => u.SubCategoria)
            .WithMany(a => a.Articulo)
            .HasForeignKey(b => b.SubCategoriaId);


        }
    }
}
