var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        "use strict";
        var DeleteEmployeeBaseController = (function () {
            function DeleteEmployeeBaseController(employeeService, employeeId) {
                var _this = this;
                this.employeeService = employeeService;
                this.employeeId = employeeId;
                employeeService.getById(employeeId)
                    .then(function (response) { _this.selectedEmployee = response; });
            }
            DeleteEmployeeBaseController.prototype.deleteEmployee = function () {
                var _this = this;
                this.employeeService.delete(this.employeeId)
                    .then(function () { _this.close(); });
            };
            return DeleteEmployeeBaseController;
        }());
        DeleteEmployeeBaseController.$inject = ["employeeService", "$routeParams", "$location", "employeeId"];
        Controllers.DeleteEmployeeBaseController = DeleteEmployeeBaseController;
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=DeleteEmployeeBaseController.js.map