module App.Controllers {
    "use strict";

    interface IDeleteEmployeeScope {
        selectedEmployee: App.Models.IEmployee;
        deleteEmployee(): void;
        close(): void;
    }

    export abstract class DeleteEmployeeBaseController implements IDeleteEmployeeScope {
        selectedEmployee: Models.IEmployee;
        static $inject = ["employeeService", "$routeParams", "$location", "employeeId"];

        constructor(
            private employeeService: App.Services.EmployeeService,
            private employeeId: number
        ) {
            employeeService.getById(employeeId)
                .then((response: App.Models.IEmployee) => { this.selectedEmployee = response; });
        }

        deleteEmployee(): void {
            this.employeeService.delete(this.employeeId)
                .then(() => { this.close(); });
        }

        abstract close(): void;
    }
}