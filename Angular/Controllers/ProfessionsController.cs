using System.Collections.Generic;
using System.Web.Http;
using Angular.Models;

namespace Angular.Controllers
{
    public class ProfessionsController : ApiController
    {
        private readonly Repository repository = new Repository();

        public IEnumerable<Profession> GetAllProfessions()
        {
            return repository.GetAllProfessions();
        }

        public Profession GetProfession(int id)
        {
            return repository.GetProfession(id);
        }

        [HttpPost]
        public Profession PostProfession(Profession profession)
        {
            return repository.AddProfession(profession);
        }

        [HttpPut]
        public bool PutProfession(Profession profession)
        {
            return repository.UpdateProfession(profession);
        }

        [HttpDelete]
        public void DeleteProfession(int id)
        {
            repository.RemoveProfession(id);
        }
    }
}