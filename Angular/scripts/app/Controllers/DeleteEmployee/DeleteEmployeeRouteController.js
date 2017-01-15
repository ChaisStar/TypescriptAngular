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
        var DeleteEmployeeRouteController = (function (_super) {
            __extends(DeleteEmployeeRouteController, _super);
            function DeleteEmployeeRouteController(employeeService, $routeParams, $location) {
                var _this = _super.call(this, employeeService, $routeParams.employeeId) || this;
                _this.$routeParams = $routeParams;
                _this.$location = $location;
                return _this;
            }
            DeleteEmployeeRouteController.prototype.close = function () {
                this.$location.path("/employees");
            };
            return DeleteEmployeeRouteController;
        }(Controllers.DeleteEmployeeBaseController));
        DeleteEmployeeRouteController.$inject = ["employeeService", "$routeParams", "$location"];
        angular
            .module("App.Module")
            .controller("App.Controllers.DeleteEmployeeRouteController", DeleteEmployeeRouteController);
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=DeleteEmployeeRouteController.js.map