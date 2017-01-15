/// <reference path="../../typings/angular-ui-bootstrap/index.d.ts"/>

module App.Controllers {
    "use strict";
    interface IMainScope {
        employees: Array<App.Models.IEmployee>;
        selectedEmployee: App.Models.IEmployee;
        gridOptions: uiGrid.IGridOptions;
        getEmployees(): void;
        addEmployee(): void;
        editEmployee(): void;
        deleteEmployee(): void;
    }

    class MainController implements IMainScope {
        employees: Array<App.Models.IEmployee>;
        selectedEmployee: App.Models.IEmployee;
        gridOptions: uiGrid.IGridOptions;

        static $inject = ["employeeService", "$uibModal"];
        constructor(
            private employeeService: App.Services.EmployeeService,
            private $uibModal: ng.ui.bootstrap.IModalService
        ) {
            var vm: IMainScope = this;
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
                onRegisterApi(gridApi: uiGrid.IGridApi): void {
                    gridApi.selection.on.rowSelectionChanged(null,
                        (row: uiGrid.IGridRowOf<App.Models.IEmployee>): void => {
                            vm.selectedEmployee = row.entity;
                        });
                }
            };
            this.getEmployees();
        }

        getEmployees(): void {
            this.employeeService.getAll().then((employees: Array<Models.IEmployee>): void => {
                this.gridOptions.data = employees;
            });
        };

        addEmployee(): void {
            this.$uibModal.open({
                templateUrl: "../../../html/employee.html",
                controller: "App.Controllers.EmployeeModalController",
                controllerAs: "vm",
                resolve: {
                    employeeId: (): number => { return null; }
                }
            }).closed.then((): void => { this.getEmployees(); });
        }

        editEmployee(): void {
            this.$uibModal.open({
                templateUrl: "../../../html/employee.html",
                controller: "App.Controllers.EmployeeModalController",
                controllerAs: "vm",
                resolve: {
                    employeeId: (): number => { return this.selectedEmployee.Id; }
                }
            }).closed.then((): void => { this.getEmployees(); });
        }

        deleteEmployee(): void {
            this.$uibModal.open({
                templateUrl: "../../../html/deleteEmployee.html",
                controller: "App.Controllers.DeleteEmployeeModalController",
                controllerAs: "vm",
                resolve: {
                    employeeId: (): number => { return this.selectedEmployee.Id; }
                }
            }).closed.then((): void => { this.getEmployees(); });
        }
    }

    angular
        .module("App.Module")
        .controller("App.Controllers.MainController", MainController);
}