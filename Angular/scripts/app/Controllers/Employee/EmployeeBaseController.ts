module App.Controllers {
    "use strict";
    interface IEmployeeScope {
        selectedEmployee: App.Models.IEmployee;
        professions: Array<App.Models.IProfession>;
        newProfession: App.Models.IProfession;
        showProfessionCreate: boolean;
        toggleShowProfessionCreate(): void;
        getProfessions(): void;
        addEmployee(): void;
        addProfession(): void;
        close(): void;
    }

    export interface IEmployeeParams extends ng.route.IRouteParamsService {
        employeeId: number;
    }

    export abstract class EmployeeBaseController implements IEmployeeScope {
        selectedEmployee: Models.IEmployee;
        professions: Array<Models.IProfession>;
        newProfession: Models.IProfession;
        showProfessionCreate: boolean;
        static $inject = ["employeeService", "professionService", "employeeId"];

        constructor(
            private employeeService: App.Services.EmployeeService,
            private professionService: App.Services.ProfessionService,
            private employeeId: number
        ) {
            if (this.employeeId) {
                employeeService.getById(this.employeeId).then((response) => { this.selectedEmployee = response; });
            }
            this.getProfessions();
            this.showProfessionCreate = false;
        }

        getProfessions(): void {
            this.professionService.getAll().then((response) => { this.professions = response; });
        }

        addEmployee(): void {
            if (this.employeeId) {
                this.employeeService.update(this.selectedEmployee).then(() => { this.close(); });
            } else {
                this.employeeService.add(this.selectedEmployee).then(() => { this.close(); });
            }
        }

        addProfession(): void {
            if (this.newProfession.name !== "") {
                this.professionService.add(this.newProfession)
                    .then(() => {
                        this.newProfession.name = "";
                        this.showProfessionCreate = false;
                        this.getProfessions();
                    });
            }
        }

        toggleShowProfessionCreate(): void {
            this.showProfessionCreate = !this.showProfessionCreate;
        }

        abstract close(): void;
    }
}