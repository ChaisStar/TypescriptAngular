module App {
    "use strict";
    var module = angular
        .module("App.Module", ["ui.grid", "ui.grid.selection", "ui.bootstrap", "ngRoute"]);
    module.config(routeConfig);

    routeConfig.$inject = ["$routeProvider"];
    function routeConfig($routeProvider: ng.route.IRouteProvider): void {
        $routeProvider
            .when("/employees",
            {
                templateUrl: "../../html/employeesList.html",
                controller: "App.Controllers.MainController",
                controllerAs: "vm"
            })
            .when("/employee/:employeeId",
            {
                templateUrl: "../../html/employee.html",
                controller: "App.Controllers.EmployeeRouteController",
                controllerAs: "vm"
            })
            .when("/employee",
            {
                templateUrl: "../../html/employee.html",
                controller: "App.Controllers.EmployeeRouteController",
                controllerAs: "vm"
            })
            .when("/deleteEmployee/:employeeId",
            {
                templateUrl: "../../html/deleteEmployee.html",
                controller: "App.Controllers.DeleteEmployeeRouteController",
                controllerAs: "vm"
            })
            .otherwise("/employees");
    }
}