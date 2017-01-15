module App.Controllers {
    "use strict";
    class DeleteEmployeeModalController extends DeleteEmployeeBaseController {
        static $inject = ["employeeService", "$uibModalInstance", "employeeId"];
        constructor(
            employeeService: App.Services.EmployeeService,
            private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance,
            employeeId: number
        ) {
            super(employeeService, employeeId);
        }

        close(): void {
            this.$uibModalInstance.close();
        }
    }

    angular
        .module("App.Module")
        .controller("App.Controllers.DeleteEmployeeModalController", DeleteEmployeeModalController);
}