var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        "use strict";
        var EmployeeBaseController = (function () {
            function EmployeeBaseController(employeeService, professionService, employeeId) {
                var _this = this;
                this.employeeService = employeeService;
                this.professionService = professionService;
                this.employeeId = employeeId;
                if (this.employeeId) {
                    employeeService.getById(this.employeeId).then(function (response) { _this.selectedEmployee = response; });
                }
                this.getProfessions();
                this.showProfessionCreate = false;
            }
            EmployeeBaseController.prototype.getProfessions = function () {
                var _this = this;
                this.professionService.getAll().then(function (response) { _this.professions = response; });
            };
            EmployeeBaseController.prototype.addEmployee = function () {
                var _this = this;
                if (this.employeeId) {
                    this.employeeService.update(this.selectedEmployee).then(function () { _this.close(); });
                }
                else {
                    this.employeeService.add(this.selectedEmployee).then(function () { _this.close(); });
                }
            };
            EmployeeBaseController.prototype.addProfession = function () {
                var _this = this;
                if (this.newProfession.name !== "") {
                    this.professionService.add(this.newProfession)
                        .then(function () {
                        _this.newProfession.name = "";
                        _this.showProfessionCreate = false;
                        _this.getProfessions();
                    });
                }
            };
            EmployeeBaseController.prototype.toggleShowProfessionCreate = function () {
                this.showProfessionCreate = !this.showProfessionCreate;
            };
            return EmployeeBaseController;
        }());
        EmployeeBaseController.$inject = ["employeeService", "professionService", "employeeId"];
        Controllers.EmployeeBaseController = EmployeeBaseController;
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=EmployeeBaseController.js.map