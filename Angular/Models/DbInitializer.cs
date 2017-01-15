using System.Collections.Generic;
using System.Data.Entity;

namespace Angular.Models
{
    public class DbInitializer : CreateDatabaseIfNotExists<AngularContext>
    {
        protected override void Seed(AngularContext context)
        {
            var driver = new Profession { Name = "Driver" };
            var pilot = new Profession { Name = "Pilot" };
            var defaultEmployees = new List<Employee>
            {
                new Employee
                {
                    FirstName = "Felipe",
                    LastName = "Massa",
                    Profession = driver
                },
                new Employee
                {
                    FirstName = "Nico",
                    LastName = "Rosberg",
                    Profession = driver
                },
                new Employee
                {
                    FirstName = "Charles",
                    LastName = "Lindbergh",
                    Profession = pilot
                }
            };
            foreach (var employee in defaultEmployees)
            {
                context.Employees.Add(employee);
            }
            base.Seed(context);
        }
    }
}
