var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        "use strict";
        var EmployeeControllerRoute = (function (_super) {
            __extends(EmployeeControllerRoute, _super);
            function EmployeeControllerRoute(employeeService, professionService, $routeParams, $location) {
                var _this = _super.call(this, employeeService, professionService, $routeParams.employeeId) || this;
                _this.$routeParams = $routeParams;
                _this.$location = $location;
                return _this;
            }
            EmployeeControllerRoute.prototype.close = function () {
                this.$location.path("/employees");
            };
            return EmployeeControllerRoute;
        }(Controllers.EmployeeControllerBase));
        EmployeeControllerRoute.$inject = ["employeeService", "professionService", "$routeParams", "$location"];
        Controllers.EmployeeControllerRoute = EmployeeControllerRoute;
        angular
            .module("App.Module")
            .controller("App.Controllers.EmployeeControllerRoute", EmployeeControllerRoute);
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=EmployeeControllerRoute.js.map