using System.Collections.Generic;
using System.Linq;
using System.Data.Entity;

namespace Angular.Models
{
    public class Repository
    {
        private readonly AngularContext context;

        public Repository()
        {
            context = new AngularContext();
        }

        #region Employees

        public IEnumerable<Employee> GetAllEmployees()
        {
            return context.Employees.Include(e => e.Profession);
        }

        public Employee GetEmployee(int id)
        {
            return context.Employees.Include(e => e.Profession).FirstOrDefault(e => e.Id == id);
        }

        public Employee AddEmployee(Employee employee)
        {
            var dbProfession = context.Professions.SingleOrDefault(p => p.Id == employee.Profession.Id);
            employee.Profession = dbProfession;
            context.Employees.Add(employee);
            context.SaveChanges();
            return employee;
        }

        public void RemoveEmployee(int id)
        {
            var dbEmployee = context.Employees.SingleOrDefault(e => e.Id == id);
            if (dbEmployee==null) return;
            context.Employees.Remove(dbEmployee);
            context.SaveChanges();
        }

        public bool UpdateEmployee(Employee employee)
        {
            var dbEmployee = context.Employees.SingleOrDefault(e => e.Id == employee.Id);
            if (dbEmployee == null) return false;
            var dbProfession = context.Professions.SingleOrDefault(p => p.Id == employee.Profession.Id);
            dbEmployee.Profession = dbProfession;
            dbEmployee.FirstName = employee.FirstName;
            dbEmployee.LastName = employee.LastName;
            context.Entry(dbEmployee).State = EntityState.Modified;
            context.SaveChanges();
            return true;
        }

        #endregion Employees

        #region Professions

        public IEnumerable<Profession> GetAllProfessions()
        {
            return context.Professions;
        }

        public Profession GetProfession(int id)
        {
            return context.Professions.FirstOrDefault(p => p.Id == id);
        }

        public Profession AddProfession(Profession profession)
        {
            var dbProfession = context.Professions.SingleOrDefault(p => p.Name.ToLower() == profession.Name.ToLower());
            if (dbProfession != null)
                return dbProfession;
            context.Professions.Add(profession);
            context.SaveChanges();
            return profession;
        }

        public void RemoveProfession(int id)
        {
            var dbProfession = context.Professions.SingleOrDefault(p => p.Id == id);
            if (dbProfession == null) return;
            context.Professions.Remove(dbProfession);
            context.SaveChanges();
        }

        public bool UpdateProfession(Profession profession)
        {
            var dbProfession = context.Professions.SingleOrDefault(p => p.Id == profession.Id);
            if (dbProfession == null)
                return false;
            dbProfession.Name = profession.Name;
            context.Entry(dbProfession).State = EntityState.Modified;
            context.SaveChanges();
            return true;
        }

        #endregion Professions
    }
}
