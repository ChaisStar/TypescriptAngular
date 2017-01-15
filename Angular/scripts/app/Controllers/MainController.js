/// <reference path="../../typings/angular-ui-bootstrap/index.d.ts"/>
var App;
/// <reference path="../../typings/angular-ui-bootstrap/index.d.ts"/>
(function (App) {
    var Controllers;
    (function (Controllers) {
        "use strict";
        var MainController = (function () {
            function MainController(employeeService, $uibModal) {
                this.employeeService = employeeService;
                this.$uibModal = $uibModal;
                var vm = this;
                vm.gridOptions = {
                    enableRowSelection: true,
                    enableRowHeaderSelection: false,
                    multiSelect: false,
                    modifierKeysToMultiSelect: false,
                    noUnselect: true,
                    columnDefs: [
                        { name: "Id", displayName: "ID", type: "number" },
                        { name: "FirstName", displayName: "First Name" },
                        { name: "LastName", displayName: "Last Name" },
                        { name: "Profession.Name", displayName: "Profession" }
                    ],
                    onRegisterApi: function (gridApi) {
                        gridApi.selection.on.rowSelectionChanged(null, function (row) {
                            vm.selectedEmployee = row.entity;
                        });
                    }
                };
                this.getEmployees();
            }
            MainController.prototype.getEmployees = function () {
                var _this = this;
                this.employeeService.getAll().then(function (employees) {
                    _this.gridOptions.data = employees;
                });
            };
            ;
            MainController.prototype.addEmployee = function () {
                var _this = this;
                this.$uibModal.open({
                    templateUrl: "../../../html/employee.html",
                    controller: "App.Controllers.EmployeeModalController",
                    controllerAs: "vm",
                    resolve: {
                        employeeId: function () { return null; }
                    }
                }).closed.then(function () { _this.getEmployees(); });
            };
            MainController.prototype.editEmployee = function () {
                var _this = this;
                this.$uibModal.open({
                    templateUrl: "../../../html/employee.html",
                    controller: "App.Controllers.EmployeeModalController",
                    controllerAs: "vm",
                    resolve: {
                        employeeId: function () { return _this.selectedEmployee.Id; }
                    }
                }).closed.then(function () { _this.getEmployees(); });
            };
            MainController.prototype.deleteEmployee = function () {
                var _this = this;
                this.$uibModal.open({
                    templateUrl: "../../../html/deleteEmployee.html",
                    controller: "App.Controllers.DeleteEmployeeModalController",
                    controllerAs: "vm",
                    resolve: {
                        employeeId: function () { return _this.selectedEmployee.Id; }
                    }
                }).closed.then(function () { _this.getEmployees(); });
            };
            return MainController;
        }());
        MainController.$inject = ["employeeService", "$uibModal"];
        angular
            .module("App.Module")
            .controller("App.Controllers.MainController", MainController);
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=MainController.js.map