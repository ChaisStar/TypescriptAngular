module App.Services {
    "use strict";
    export class EmployeeService extends BaseService<App.Models.IEmployee> {
        static $inject = ["$http"];
        constructor($http: ng.IHttpService) {
            super($http, "/api/employees/");
        }
    }

    angular
        .module("App.Module")
        .service("employeeService", EmployeeService);
}