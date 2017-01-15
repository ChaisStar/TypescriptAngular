var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        "use strict";
        var EmployeeControllerBase = (function () {
            function EmployeeControllerBase(employeeService, professionService, employeeId) {
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
            EmployeeControllerBase.prototype.getProfessions = function () {
                var _this = this;
                this.professionService.getAll().then(function (response) { _this.professions = response; });
            };
            EmployeeControllerBase.prototype.addEmployee = function () {
                var _this = this;
                if (this.employeeId) {
                    this.employeeService.update(this.selectedEmployee).then(function () { _this.close(); });
                }
                else {
                    this.employeeService.add(this.selectedEmployee).then(function () { _this.close(); });
                }
            };
            EmployeeControllerBase.prototype.addProfession = function () {
                var _this = this;
                this.professionService.add(this.newProfession)
                    .then(function () {
                    _this.newProfession.name = "";
                    _this.showProfessionCreate = false;
                    _this.getProfessions();
                });
            };
            EmployeeControllerBase.prototype.toggleShowProfessionCreate = function () {
                this.showProfessionCreate = !this.showProfessionCreate;
            };
            return EmployeeControllerBase;
        }());
        EmployeeControllerBase.$inject = ["employeeService", "professionService", "employeeId"];
        Controllers.EmployeeControllerBase = EmployeeControllerBase;
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=EmployeeControllerBase.js.map