var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        "use strict";
        var DeleteEmployeeControllerBase = (function () {
            function DeleteEmployeeControllerBase(employeeService, $routeParams, $location, employeeId) {
                var _this = this;
                this.employeeService = employeeService;
                this.$routeParams = $routeParams;
                this.$location = $location;
                this.employeeId = employeeId;
                employeeService.getById(employeeId)
                    .then(function (response) { _this.selectedEmployee = response; });
            }
            DeleteEmployeeControllerBase.prototype.deleteEmployee = function () {
                var _this = this;
                this.employeeService.delete(this.$routeParams.employeeId)
                    .then(function () { _this.$location.path("/employees"); });
            };
            return DeleteEmployeeControllerBase;
        }());
        DeleteEmployeeControllerBase.$inject = ["employeeService", "$routeParams", "$location", "employeeId"];
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=DeleteEmployeeBase.js.map