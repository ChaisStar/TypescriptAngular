using System.Collections.Generic;
using System.Web.Http;
using Angular.Models;

namespace Angular.Controllers
{
    public class EmployeesController : ApiController
    {
        private readonly Repository repository = new Repository();

        public IEnumerable<Employee> GetAllEmployees()
        {
            return repository.GetAllEmployees();
        }

        public Employee GetEmployee(int id)
        {
            return repository.GetEmployee(id);
        }

        [HttpPost]
        public Employee PostEmployee(Employee employee)
        {
            return repository.AddEmployee(employee);
        }

        [HttpPut]
        public bool PutEmployee(Employee employee)
        {
            return repository.UpdateEmployee(employee);
        }

        [HttpDelete]
        public void DeleteEmployee(int id)
        {
            repository.RemoveEmployee(id);
        }
    }
}
