module App.Controllers {
    "use strict";
    export class EmployeeModalController extends EmployeeBaseController {
        static $inject = ["employeeService", "professionService", "$uibModalInstance", "employeeId"];
        constructor(
            employeeService: App.Services.EmployeeService,
            professionService: App.Services.ProfessionService,
            private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance,
            employeeId: number
        ) {
            super(employeeService, professionService, employeeId);
        }

        close(): void {
            this.$uibModalInstance.close();
        }
    }

    angular
        .module("App.Module")
        .controller("App.Controllers.EmployeeModalController", EmployeeModalController);
}