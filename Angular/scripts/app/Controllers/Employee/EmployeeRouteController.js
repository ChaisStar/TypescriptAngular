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
        var EmployeeRouteController = (function (_super) {
            __extends(EmployeeRouteController, _super);
            function EmployeeRouteController(employeeService, professionService, $routeParams, $location) {
                var _this = _super.call(this, employeeService, professionService, $routeParams.employeeId) || this;
                _this.$routeParams = $routeParams;
                _this.$location = $location;
                return _this;
            }
            EmployeeRouteController.prototype.close = function () {
                this.$location.path("/employees");
            };
            return EmployeeRouteController;
        }(Controllers.EmployeeBaseController));
        EmployeeRouteController.$inject = ["employeeService", "professionService", "$routeParams", "$location"];
        Controllers.EmployeeRouteController = EmployeeRouteController;
        angular
            .module("App.Module")
            .controller("App.Controllers.EmployeeRouteController", EmployeeRouteController);
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=EmployeeRouteController.js.map