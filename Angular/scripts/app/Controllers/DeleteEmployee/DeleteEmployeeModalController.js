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
        var DeleteEmployeeModalController = (function (_super) {
            __extends(DeleteEmployeeModalController, _super);
            function DeleteEmployeeModalController(employeeService, $uibModalInstance, employeeId) {
                var _this = _super.call(this, employeeService, employeeId) || this;
                _this.$uibModalInstance = $uibModalInstance;
                return _this;
            }
            DeleteEmployeeModalController.prototype.close = function () {
                this.$uibModalInstance.close();
            };
            return DeleteEmployeeModalController;
        }(Controllers.DeleteEmployeeBaseController));
        DeleteEmployeeModalController.$inject = ["employeeService", "$uibModalInstance", "employeeId"];
        angular
            .module("App.Module")
            .controller("App.Controllers.DeleteEmployeeModalController", DeleteEmployeeModalController);
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=DeleteEmployeeModalController.js.map