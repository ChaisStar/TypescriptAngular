var App;
(function (App) {
    var Services;
    (function (Services) {
        "use strict";
        var SendModalService = (function () {
            function SendModalService() {
            }
            SendModalService.prototype.get = function () {
                this.modalData.isModal = false;
                var result = this.modalData.employeeId;
                this.modalData.employeeId = null;
                return result;
            };
            SendModalService.prototype.set = function (employeeId) {
                this.modalData.isModal = true;
                this.modalData.employeeId = employeeId;
            };
            return SendModalService;
        }());
        Services.SendModalService = SendModalService;
        angular
            .module("App.Module")
            .service("sendModalService", SendModalService);
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
//# sourceMappingURL=SendModalData.js.map