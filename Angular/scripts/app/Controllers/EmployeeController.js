var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        "use strict";
        var EmployeeController = (function () {
            function EmployeeController(employeeService, professionService, $routeParams, $location, $uibModalInstance, sendModalService) {
                var _this = this;
                this.employeeService = employeeService;
                this.professionService = professionService;
                this.$routeParams = $routeParams;
                this.$location = $location;
                this.$uibModalInstance = $uibModalInstance;
                this.sendModalService = sendModalService;
                var modalData = sendModalService.get();
                this.employeeId = ($routeParams.employeeId || modalData);
                if (this.employeeId) {
                    employeeService.getById(this.employeeId).then(function (response) { _this.selectedEmployee = response; });
                }
                this.getProfessions();
                this.showProfessionCreate = false;
            }
            EmployeeController.prototype.getProfessions = function () {
                var _this = this;
                this.professionService.getAll().then(function (response) { _this.professions = response; });
            };
            EmployeeController.prototype.addEmployee = function () {
                var _this = this;
                if (this.employeeId) {
                    this.employeeService.update(this.selectedEmployee).then(function () { _this.$location.path("/employees"); });
                }
                else {
                    this.employeeService.add(this.selectedEmployee).then(function () { _this.$location.path("/employees"); });
                }
            };
            EmployeeController.prototype.addProfession = function () {
                var _this = this;
                this.professionService.add(this.newProfession)
                    .then(function () {
                    _this.newProfession.name = "";
                    _this.showProfessionCreate = false;
                    _this.getProfessions();
                });
            };
            EmployeeController.prototype.toggleShowProfessionCreate = function () {
                this.showProfessionCreate = !this.showProfessionCreate;
            };
            return EmployeeController;
        }());
        EmployeeController.$inject = ["employeeService", "professionService", "$routeParams", "$location", "$uibModalInstance", "sendModalService"];
        angular
            .module("App.Module")
            .controller("App.Controllers.EmployeeController", EmployeeController);
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=EmployeeController.js.map