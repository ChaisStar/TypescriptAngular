using System.Data.Entity;

namespace Angular.Models
{
    public class AngularContext: DbContext
    {
        public AngularContext()
            : base("name=Angular")
        {
            Database.SetInitializer(new DbInitializer());
            Database.Initialize(true);
        }

        public DbSet<Employee> Employees { get; set; }

        public DbSet<Profession> Professions { get; set; }
    }

}