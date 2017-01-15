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
        var EmployeeControllerModal = (function (_super) {
            __extends(EmployeeControllerModal, _super);
            function EmployeeControllerModal(employeeService, professionService, $uibModalInstance, employeeId) {
                var _this = _super.call(this, employeeService, professionService, employeeId) || this;
                _this.$uibModalInstance = $uibModalInstance;
                return _this;
            }
            EmployeeControllerModal.prototype.close = function () {
                this.$uibModalInstance.close();
            };
            return EmployeeControllerModal;
        }(Controllers.EmployeeControllerBase));
        EmployeeControllerModal.$inject = ["employeeService", "professionService", "$uibModalInstance", "employeeId"];
        Controllers.EmployeeControllerModal = EmployeeControllerModal;
        angular
            .module("App.Module")
            .controller("App.Controllers.EmployeeControllerModal", EmployeeControllerModal);
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=EmployeeControllerModal.js.map