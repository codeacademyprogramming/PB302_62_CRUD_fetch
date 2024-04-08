using ConsoleWeb.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleWeb
{
    internal class AppDbContext:DbContext
    {

        public DbSet<Product> Products { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=MOON00\\LOCALHOST;Database=webdb1;Trusted_connection=true");
        }
    }
}
