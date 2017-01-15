module App.Controllers {
    "use strict";
    class DeleteEmployeeRouteController extends DeleteEmployeeBaseController {
        static $inject = ["employeeService", "$routeParams", "$location"];
        constructor(
            employeeService: App.Services.EmployeeService,
            private $routeParams: IEmployeeParams,
            private $location: ng.ILocationService
        ) {
            super(employeeService, $routeParams.employeeId);
        }

        close(): void {
            this.$location.path("/employees");
        }
    }

    angular
        .module("App.Module")
        .controller("App.Controllers.DeleteEmployeeRouteController", DeleteEmployeeRouteController);
}