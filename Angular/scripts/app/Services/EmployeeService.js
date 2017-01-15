var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var App;
(function (App) {
    var Services;
    (function (Services) {
        "use strict";
        var EmployeeService = (function (_super) {
            __extends(EmployeeService, _super);
            function EmployeeService($http) {
                return _super.call(this, $http, "/api/employees/") || this;
            }
            return EmployeeService;
        }(Services.BaseService));
        EmployeeService.$inject = ["$http"];
        Services.EmployeeService = EmployeeService;
        angular
            .module("App.Module")
            .service("employeeService", EmployeeService);
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
//# sourceMappingURL=EmployeeService.js.map