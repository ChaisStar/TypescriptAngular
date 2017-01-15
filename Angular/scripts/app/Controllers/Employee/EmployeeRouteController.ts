module App.Controllers {
    "use strict";
    export class EmployeeRouteController extends EmployeeBaseController {
        static $inject = ["employeeService", "professionService", "$routeParams", "$location"];
        constructor(
            employeeService: App.Services.EmployeeService,
            professionService: App.Services.ProfessionService,
            private $routeParams: IEmployeeParams,
            private $location: ng.ILocationService
        ) {
            super(employeeService, professionService, $routeParams.employeeId);
        }

        close(): void {
            this.$location.path("/employees");
        }
    }

    angular
        .module("App.Module")
        .controller("App.Controllers.EmployeeRouteController", EmployeeRouteController);
}