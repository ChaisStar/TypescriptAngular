var App;
(function (App) {
    var Services;
    (function (Services) {
        "use strict";
        var ControllersFactory = (function () {
            function ControllersFactory() {
            }
            ControllersFactory.prototype.setEmployeeController = function (isModal) {
                if (isModal) {
                    angular
                        .module("App.Module")
                        .controller("App.Controllers.EmployeeController", App.Controllers.EmployeeControllerModal);
                }
                else {
                    angular
                        .module("App.Module")
                        .controller("App.Controllers.EmployeeController", App.Controllers.EmployeeControllerRoute);
                }
            };
            ControllersFactory.prototype.setDeleteEmployee = function (isModal) { };
            return ControllersFactory;
        }());
        Services.ControllersFactory = ControllersFactory;
        angular
            .module("App.Module")
            .service("controllersFactory", ControllersFactory);
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
//# sourceMappingURL=ControllersFactory.js.map