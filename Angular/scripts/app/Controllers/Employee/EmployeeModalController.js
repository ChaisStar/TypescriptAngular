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
        var EmployeeModalController = (function (_super) {
            __extends(EmployeeModalController, _super);
            function EmployeeModalController(employeeService, professionService, $uibModalInstance, employeeId) {
                var _this = _super.call(this, employeeService, professionService, employeeId) || this;
                _this.$uibModalInstance = $uibModalInstance;
                return _this;
            }
            EmployeeModalController.prototype.close = function () {
                this.$uibModalInstance.close();
            };
            return EmployeeModalController;
        }(Controllers.EmployeeBaseController));
        EmployeeModalController.$inject = ["employeeService", "professionService", "$uibModalInstance", "employeeId"];
        Controllers.EmployeeModalController = EmployeeModalController;
        angular
            .module("App.Module")
            .controller("App.Controllers.EmployeeModalController", EmployeeModalController);
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=EmployeeModalController.js.map